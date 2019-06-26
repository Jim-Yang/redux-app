import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos, goals, loading } from '../reducers'
import { checker, logger } from '../middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(combineReducers({todos, goals, loading}), composeWithDevTools(applyMiddleware(checker, logger)))