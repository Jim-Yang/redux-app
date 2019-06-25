import React from 'react'
import List from '../components/List';
import { Store } from 'redux';
import { addTodoAction, removeTodoAction, toggleTodoAction } from '../redux/actions'
import { generateId } from '../utils'
import { Todo, Goal } from '../types';

type TodosProp = {
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

        this.props.store.dispatch(addTodoAction({
            id: generateId(),
            complete: false,
            name: name
        }))

        this.input.value = ''
    }

    removeItem = (item: Todo) => {
        this.props.store.dispatch(removeTodoAction(item))
    }

    toggleItem = (item: Todo) => {
        this.props.store.dispatch(toggleTodoAction(item))
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