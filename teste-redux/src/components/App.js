import React, { Component } from 'react'

import Post from './Post';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Olá</h1>
                <Post title="A"/>
                <Post title="C"/>
                <Post title="B"/>
            </div>
        )
    }
}