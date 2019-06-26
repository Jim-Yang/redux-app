import { Goal, Todo, DATA_ACTIONS, DataAction } from "../../types";
import API from "../../api";
import { Dispatch } from "redux";

export default class DataActions {
    
    private static receiveDataAction(goals: Goal[], todos: Todo[]): DataAction {
        return {
            type: DATA_ACTIONS.RECIEVE_DATA,
            todos,
            goals
        }
    }

    static handleReceiveData(api: API) {
        return (dispatch: Dispatch) => {
            Promise.all([api.fetchGoals(), api.fetchTodos()]).then(([goals, todos]) => {
                dispatch(this.receiveDataAction(goals, todos))
            }).catch()
        }
    }
}