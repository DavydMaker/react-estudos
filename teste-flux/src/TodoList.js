import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import * as todoActions from './actions/todos'


class TodoList extends Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.state = {
            newTodoText: '',
        }
    }

    state

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);

        this.setState({ newTodoText: '' })
    }

    render() {
        return (
            <>
                            <input type="text" onChange={((e) => this.setState({ newTodoText: e.target.value }))} value={this.state.newTodoText} />
                <button onClick={this.addNewTodo}>Novo to-do</button>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
            </>
        )
    }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch)

const MapStateToProps = state => ({
    todos: state.todos,
})

export default connect(MapStateToProps, mapDispatchToProps)(TodoList)