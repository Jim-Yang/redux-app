export type Action = {
    type: ACTIONS,
    todo?: Todo,
    goal?: Goal
}

export type Todo = {
    id: number,
    name: string,
    complete: boolean
}

export type State = {
    todos: Todo[],
    goals: Goal[]
}

export enum ACTIONS {
    ADD_TODO="ADD_TODO",
    REMOVE_TODO="REMOVE_TODO",
    TOGGLE_TODO="TOGGLE_TODO",
    ADD_GOAL="ADD_GOAL",
    REMOVE_GOAL="REMOVE_GOAL"
}

export type Goal = {
    id: number,
    name: string
    complete?: boolean
}