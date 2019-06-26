import { Todo, Action, ACTIONS, Goal } from '../../types'

// Reducer for todos
export function todos(todos: Todo[] = [], action: Action): Todo[] {
    const actionTodo = action.todo
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return actionTodo ? todos.concat(actionTodo) : todos // Return new object with todo
        case ACTIONS.REMOVE_TODO:
            return actionTodo ? todos.filter( todo => (todo.id !== actionTodo.id)) : todos
        case ACTIONS.TOGGLE_TODO:
            if(!actionTodo) {
                return todos
             }
            return todos.map(todo => {
                if(todo.id === actionTodo.id){
                    return Object.assign({}, todo, { complete: !todo.complete })
                }
                return todo
            })
        case ACTIONS.RECIEVE_DATA:
                const actionTodos = action.todos
                console.log(actionTodos, "ACTION TODOS")
                return actionTodos || todos
        default:
            return todos
    }
}

// Reducer for goals
export function goals(goals: Goal[] = [], action: Action): Goal[]{
    const actionGoal = action.goal
    switch(action.type){
        case ACTIONS.ADD_GOAL:
            return actionGoal ? goals.concat(actionGoal) : goals
        case ACTIONS.REMOVE_GOAL:
            return actionGoal ? goals.filter(goal => (goal.id !== actionGoal.id)) : goals
        case ACTIONS.RECIEVE_DATA:
            const actionGoals = action.goals
            return actionGoals || goals
        default:
            return goals
    }
}

// Reducer for loading
export function loading(loading: boolean = true, action: Action): boolean {
    switch(action.type){
        // Reminder that this action is dispatched when items are done loading
        case ACTIONS.RECIEVE_DATA:
            return false
        default:
            return loading
    }
}