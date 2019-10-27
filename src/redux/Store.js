import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";

import RootReducer from "./reducers";

const middlewares = [thunk, apiMiddleware];
__DEV__ ? middlewares.push(logger) : "";

export default createStore(RootReducer, applyMiddleware(...middlewares));
