import React from 'react'
import List from '../components/List';
import { Store } from 'redux';
import { TodoActions } from '../redux/actions'
import { Todo } from '../types';
import API from '../api';

type TodosProp = {
    api: API
    store: Store
    todos: Todo[]
}

export default class Todos extends React.Component<TodosProp> {

    input: HTMLInputElement

    constructor(props: TodosProp) {
        super(props)
        this.input = {} as HTMLInputElement
    }

    addItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault()
        const name = this.input.value
        if(name === ''){
            return
        }
        // @ts-ignore
        this.props.store.dispatch(TodoActions.handleSaveTodo(name, this.props.api, () => {this.input.value = ''}))
    }

    removeItem = (item: Todo) => {
        // @ts-ignore
        this.props.store.dispatch(TodoActions.handleDeleteTodo(item, this.props.api))
    }

    toggleItem = (item: Todo) => {
        // @ts-ignore
        this.props.store.dispatch(TodoActions.handleToggleTodo(item, this.props.api))
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => this.input = input!}
                />
                <button onClick={this.addItem}>Add Todo</button>

                <List
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        )
    }
}