import { ACTIONS, Action, Todo, Goal } from '../../types'

export function addTodoAction(todo: Todo): Action {
    return {
        type: ACTIONS.ADD_TODO, 
        todo
    }
}

export function toggleTodoAction(todo: Todo): Action {
    return {
        type: ACTIONS.TOGGLE_TODO,
        todo
    }
}

export function removeTodoAction(todo: Todo): Action {
    return {
        type: ACTIONS.REMOVE_TODO,
        todo
    }
}

export function addGoalAction(goal: Goal): Action {
    return {
        type: ACTIONS.ADD_GOAL,
        goal
    }
}

export function removeGoalAction(goal: Goal): Action {
    return {
        type: ACTIONS.REMOVE_GOAL,
        goal
    }
}