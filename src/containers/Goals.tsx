import React from "react";
import List from "../components/List";
import { Store } from "redux";
import { generateId } from "../utils";
import { addGoalAction, removeGoalAction } from "../redux/actions";
import { Goal } from "../types";

type GoalsProps = {
    store: Store
    goals: Goal[]
}

export default class Goals extends React.Component<GoalsProps> {

    input: HTMLInputElement

    constructor(props: GoalsProps) {
        super(props)
        this.input = {} as HTMLInputElement
    }

    addItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault()
        const name = this.input.value
        if(name === ''){
            return
        }

        this.props.store.dispatch(addGoalAction({
            id: generateId(),
            name: name
        }))

        this.input.value = ''
    }

    removeItem = (item: Goal) => {
        this.props.store.dispatch(removeGoalAction(item))
    }

    render() {
        return (
            <div>
                <h1>Goals List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => this.input = input!}
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List
                    items={this.props.goals}
                    remove={this.removeItem}
                    />
            </div>
        )
    }
}