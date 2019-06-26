import { Action, Todo, TODO_ACTIONS } from '../../types'
import { Dispatch } from 'redux';
import API from '../../api';

export default class TodoActions {
    private static addTodoAction(todo: Todo): Action {
        return {
            type: TODO_ACTIONS.ADD_TODO, 
            todo
        }
    }
    
    private static toggleTodoAction(todo: Todo): Action {
        return {
            type: TODO_ACTIONS.TOGGLE_TODO,
            todo
        }
    }
    
    private static removeTodoAction(todo: Todo): Action {
        return {
            type: TODO_ACTIONS.REMOVE_TODO,
            todo
        }
    }

    static handleDeleteTodo(todo: Todo, api: API) {
        return ( dispatch: Dispatch ) => {
            // Optimistically remove the item from UI
            dispatch(this.removeTodoAction(todo))
            return api.deleteTodo(todo.id).catch( () => {
                // If it fails, add it back
                dispatch(this.addTodoAction(todo))
                alert("Delete todo failed, try again")
            })
        }
    }
    
    static handleToggleTodo(todo: Todo, api: API) {
        return (dispatch: Dispatch) => {
                // Optimistically toggle todo
                dispatch(this.toggleTodoAction(todo))
                // Toggle on API
                api.saveTodoToggle(todo.id).then().catch(() => {
                dispatch(this.toggleTodoAction(todo))
                alert("Toggle went wrong :( ")
            })
        }
    }
    
    static handleSaveTodo(name: string, api: API, callback: Function) {
        return (dispatch: Dispatch ) => {
            // Save to API
            api.saveTodo(name).then( todo => {
                callback()
                dispatch(this.addTodoAction(todo))
            }).catch(() => {
                alert("Adding todo failed, try again")
            })
        }
    }
}