type Action = {
    type: ACTIONS,
    todo: Todo
}

type Todo = {
    id: number,
    name: string,
    complete: boolean
}

type State = {
    todos: Todo[]
}

enum ACTIONS {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    ADD_GOAL
}

function createStore(reducer: any) {
    let state: State
    let listeners: any = []

    const getState = () => state

    const subscribe = (listener: Function) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter( (l: any) => l !== listener)
        }
    }

    const dispatch = (action: Action) => {
        // Call todos
        state = reducer(state, action)
        listeners.forEach((listener: any) => {listener()})
        // Loop over listeners and invoke them
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

// Reducer Function
function todos( state: State = {todos: []}, action: Action): State {
    const actionTodo = action.todo
    if(!actionTodo) {
        return state
    }
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return Object.assign({}, {todos: state.todos.concat(actionTodo)}) // Return new object with todo
        case ACTIONS.REMOVE_TODO:
            return Object.assign({}, {todos: state.todos.filter( todo => (todo.id !== actionTodo.id))})
        case ACTIONS.TOGGLE_TODO:
            return Object.assign({}, {todos: state.todos.map(todo => {
                return todo.id === actionTodo.id ? Object.assign({}, todo, { complete: !todo.complete }): todo
            })})
    }
    
    return state
}

const store = createStore(todos)

const unsubscribe = store.subscribe(() => {
    console.log(`The new state is: ${ JSON.stringify(store.getState())}`)
})

store.dispatch({
    type: ACTIONS.ADD_TODO,
    todo: {
        id: 0,
        name: 'Learn redux',
        complete: false
    }
})

store.dispatch({
    type: ACTIONS.ADD_TODO,
    todo: {
        id: 1,
        name: 'Learn react',
        complete: false
    }
})

store.dispatch({
    type: ACTIONS.TOGGLE_TODO,
    todo: {
        id: 1,
        name: 'Learn react',
        complete: false
    }
})