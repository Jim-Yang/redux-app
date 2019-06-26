import { Goal, GOAL_ACTIONS, GoalAction } from "../../types";
import API from "../../api";
import { Dispatch } from "redux";

export default class GoalActions {
    private static addGoalAction(goal: Goal): GoalAction {
        return {
            type: GOAL_ACTIONS.ADD_GOAL,
            goal
        }
    }
    
    private static removeGoalAction(goal: Goal): GoalAction {
        return {
            type: GOAL_ACTIONS.REMOVE_GOAL,
            goal
        }
    }

    static handleAddGoal(name: string, api: API, callback: Function){ 
        return (dispatch: Dispatch) => {
            api.saveGoal(name).then(goal => {
                callback()
                dispatch(this.addGoalAction(goal))
            }).catch(() => {
                alert("Save goal failed, try again")
            })
        }
    }

    static handleRemoveGoal(goal: Goal, api: API) {
        return (dispatch: Dispatch) => {
            dispatch(this.removeGoalAction(goal))
            api.deleteGoal(goal.id).catch(() => {
                alert("Remove goal failed, try again")
                dispatch(this.addGoalAction(goal))
            })
        }
    }
}