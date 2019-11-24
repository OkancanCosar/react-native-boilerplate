import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import RootReducer from "./reducers";

const middlewares = [thunk];
__DEV__ ? middlewares.push(logger) : "";

export default createStore(RootReducer, applyMiddleware(...middlewares));
