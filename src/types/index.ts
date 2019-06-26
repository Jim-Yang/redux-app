export type Action = TodoAction | GoalAction

export type TodoAction = {
    type: TODO_ACTIONS,
    todo?: Todo
    todos?: Todo[]
}

export type GoalAction = {
    type: GOAL_ACTIONS,
    goal?: Goal,
    goals?: Goal[]
}

export type DataAction = {
    type: DATA_ACTIONS,
    goals?: Goal[],
    todos?: Todo[]
}

export type Todo = {
    id: number,
    name: string,
    complete: boolean
}

export type State = {
    data: ApiData
    loading: boolean
}

export type ApiData = {
    goals: Goal[],
    todos: Todo[]
}

export type ACTIONS = TODO_ACTIONS | GOAL_ACTIONS | DATA_ACTIONS

export enum TODO_ACTIONS {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    RECIEVE_DATA = "RECIEVE_DATA"
}

export enum GOAL_ACTIONS {
    ADD_GOAL = "ADD_GOAL",
    REMOVE_GOAL = "REMOVE_GOAL",
    RECIEVE_DATA = "RECIEVE_DATA"
}

export enum DATA_ACTIONS {
    RECIEVE_DATA = "RECIEVE_DATA"
}

export type Goal = {
    id: number,
    name: string
    complete?: boolean
}