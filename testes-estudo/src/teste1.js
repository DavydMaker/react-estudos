import React, { Component } from 'react'

export default class teste1 extends Component {
    constructor(props){
        super(props)

        this.evento = this.evento.bind(this);
    }

    evento(){
        console.dir(this);
    }

    render() {
        return (
            <>
                <h1 onClick={this.evento}>FradSgment Test</h1>
                <h2>Oioioioi</h2>
            </>

        )
    }
}
