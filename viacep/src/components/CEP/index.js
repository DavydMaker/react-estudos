import React, { Component } from 'react';

import './style.css';

export default class CEP extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cep : {},
        erro : ''
    };
  }

  pesquisarCEP = async () => {
    let CEP = this.state.cep;

    if(CEP.length !== 8){
        this.setState({erro : "O CEP deve conter 8 digitos."});
        return;
    }

    let url = `https://viacep.com.br/ws/${CEP}/json/`;
    
    await fetch(url)
    .then(res=>{
        console.log(res);
        return res.json()
    })
    .then(json=>{
        if(json.erro == true){
            this.setState({erro : "Ocorreu um erro. Verifique o CEP e tente novamente."});
            return;
        }
        this.setState({ cep : json, erro: '' });
    });
  };

  render() {
    const { cep, erro } = this.state

    return (
        <div className="cep">
            <input type="number" onChange={(event)=>this.setState({ cep:event.target.value })} />
            <button onClick={this.pesquisarCEP}>Consultar</button><br/>
            <label>{erro}</label><br/>
            <strong>CEP:</strong> { cep.cep }<br/>
            <strong>Logradouro:</strong> { cep.logradouro }<br/>
            <strong>Complemento:</strong> { cep.complemento }<br/>
            <strong>Bairro:</strong> { cep.bairro }<br/>
            <strong>Cidade:</strong> { cep.localidade }<br/>
            <strong>Estado:</strong> { cep.uf }<br/>
            <strong>Unidade:</strong> { cep.unidade }<br/>
            <strong>Código IBGE:</strong> { cep.ibge }<br/>
            <strong>Código GIA/ICMS:</strong> { cep.gia }
        </div>

        
    );
  }
}
