import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos, goals } from '../reducers'
import { checker, logger } from '../middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(combineReducers({todos, goals}), composeWithDevTools(applyMiddleware(checker, logger)))