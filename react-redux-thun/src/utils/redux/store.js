import {applyMiddleware, legacy_createStore as createStore} from "redux"
import { reducer } from "./reducer"
import logger from "redux-logger"
import {thunk} from "redux-thunk"

export const fetchStore=createStore(reducer,applyMiddleware(logger,thunk)) 

