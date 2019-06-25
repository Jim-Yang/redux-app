import { Todo, Action, ACTIONS, Goal } from '../../types'

// Reducer for todos
export function todos(todos: Todo[] = [], action: Action): Todo[] {
    const actionTodo = action.todo
    if(!actionTodo) {
        return todos
    }
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return todos.concat(actionTodo) // Return new object with todo
        case ACTIONS.REMOVE_TODO:
            return todos.filter( todo => (todo.id !== actionTodo.id))
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                console.log("TODO: ", todo)
                console.log("ACTION TODO: ", actionTodo)
                if(todo.id = actionTodo.id){
                    return Object.assign({}, todo, { complete: !todo.complete })
                }
                return todo
            })
        default:
            return todos
    }
}

// Reducer for goals
export function goals(goals: Goal[] = [], action: Action): Goal[]{
    const actionGoal = action.goal
    if(!actionGoal) {
        return goals
    }
    switch(action.type){
        case ACTIONS.ADD_GOAL:
            return goals.concat(actionGoal)
        case ACTIONS.REMOVE_GOAL:
            return goals.filter(goal => (goal.id !== actionGoal.id))
        default:
            return goals
    }
}