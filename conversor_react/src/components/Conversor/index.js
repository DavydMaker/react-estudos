import React, {Component } from 'react';

import './style.css';

export default class Conversor extends Component{
    
    state = {
        moedaA_valor: "",
        moedaB_valor: 0,
    }

    converter = () => {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y&apiKey=286404cb3de248e70db0`

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[de_para].val;
            let moedaB_valor = (parseFloat(this.state.moedaA_valor*cotacao)).toFixed(2);
            this.setState({ moedaB_valor });
        })
    }

    render(){
        const { moedaB_valor } = this.state;
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}/>
                <button onClick={this.converter}>Converter</button>
                <h2>{moedaB_valor}</h2>
            </div>
        )
    }
}