import { createStore, combineReducers, Middleware, Store, applyMiddleware } from 'redux'

type Action = {
    type: ACTIONS,
    todo?: Todo,
    goal?: Goal
}

type Todo = {
    id: number,
    name: string,
    complete: boolean
}

type State = {
    todos: Todo[],
    goals: Goal[]
}

enum ACTIONS {
    ADD_TODO="ADD_TODO",
    REMOVE_TODO="REMOVE_TODO",
    TOGGLE_TODO="TOGGLE_TODO",
    ADD_GOAL="ADD_GOAL",
    REMOVE_GOAL="REMOVE_GOAL"
}

type Goal = {
    id: number,
    name: string
}

// Reducer for todos
function todos(todos: Todo[] = [], action: Action): Todo[] {
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
                return todo.id === actionTodo.id ? Object.assign({}, todo, { complete: !todo.complete }): todo
            })
        default:
            return todos
    }
}

// Reducer for goals
function goals(goals: Goal[] = [], action: Action): Goal[]{
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

// Actions
function addTodoAction(todo: Todo): Action {
    return {
        type: ACTIONS.ADD_TODO, 
        todo
    }
}

function toggleTodoAction(todo: Todo): Action {
    return {
        type: ACTIONS.TOGGLE_TODO,
        todo
    }
}

function removeTodoAction(todo: Todo): Action {
    return {
        type: ACTIONS.REMOVE_TODO,
        todo
    }
}

function addGoalAction(goal: Goal): Action {
    return {
        type: ACTIONS.ADD_GOAL,
        goal
    }
}

function removeGoalAction(goal: Goal): Action {
    return {
        type: ACTIONS.REMOVE_GOAL,
        goal
    }
}

// Middleware
const checker: Middleware = (store) => (next) => (action: Action) => {
    if(action.type === ACTIONS.ADD_TODO){
        if(action.todo) {
            if(action.todo.name === "bitcoin"){
                console.log("Unacceptable")
                return
            }
        }
    }
    return next(action)
}

const logger: Middleware = (store) => (next) => (action: Action) => {
    console.group(action.type)
    console.log(`The current action: ${JSON.stringify(action)}`)
    const result = next(action)
    console.log(`The new state: ${JSON.stringify(result)}`)
    console.groupEnd()
    return result
}


// Actual code

const store = createStore(combineReducers({
    todos, goals
}), applyMiddleware(checker, logger))

const unsubscribe = store.subscribe(() => {
    console.log(`The new state is: ${ JSON.stringify(store.getState())}`)
})

store.dispatch(addTodoAction({
    id: 0,
    name: 'Learn redux',
    complete: false
}))

store.dispatch(addTodoAction({
    id: 1,
    name: 'Learn react',
    complete: false
}))

store.dispatch(toggleTodoAction({
    id: 1,
    name: 'Learn react',
    complete: false
}))

store.dispatch(addGoalAction({
    id:1,
    name: 'Some goal'
}))

store.dispatch(addGoalAction({
    id:2,
    name: 'Another goal'
}))

store.dispatch(removeGoalAction({
    id:2,
    name: 'Another goal'
}))

store.dispatch(addTodoAction({
    id:4,
    name: 'bitcoin',
    complete: false
}))