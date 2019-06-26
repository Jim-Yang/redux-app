import React from "react";
import List from "../components/List";
import { Store } from "redux";
import { Goal } from "../types";
import { GoalActions } from './../redux/actions/'
import API from "../api";

type GoalsProps = {
    api: API
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
        // @ts-ignore
        this.props.store.dispatch(GoalActions.handleAddGoal(name, this.props.api, () => { this.input.value = '' }))
    }

    removeItem = (item: Goal) => {
        // @ts-ignore
        this.props.store.dispatch(GoalActions.handleRemoveGoal(item, this.props.api))
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