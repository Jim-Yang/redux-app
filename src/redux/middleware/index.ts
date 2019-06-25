import { Action, ACTIONS } from "../../types";
import { Middleware } from "redux";

// Middleware
export const checker: Middleware = (store) => (next) => (action: Action) => {
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

export const logger: Middleware = (store) => (next) => (action: Action) => {
    console.group(action.type)
    console.log(`The current action: ${JSON.stringify(action)}`)
    const result = next(action)
    console.log(`The new state: ${JSON.stringify(result)}`)
    console.log(`Total state ${JSON.stringify(store.getState())}`)
    console.groupEnd()
    return result
}