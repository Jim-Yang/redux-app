export type Action = {
    type: ACTIONS,
    todo?: Todo,
    goal?: Goal
    todos?: Todo[],
    goals?: Goal[]
}

export type Todo = {
    id: number,
    name: string,
    complete: boolean
}

export type State = {
    todos: Todo[],
    goals: Goal[],
    loading: boolean
}

export enum ACTIONS {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    ADD_GOAL = "ADD_GOAL",
    REMOVE_GOAL = "REMOVE_GOAL",
    RECIEVE_DATA = "RECIEVE_DATA"
}

export type Goal = {
    id: number,
    name: string
    complete?: boolean
}