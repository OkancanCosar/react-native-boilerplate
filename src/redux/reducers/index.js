import { combineReducers } from "redux";

import R_Example from "./R_Example";
//...  add other reducer imports

const RootReducer = combineReducers({
  R_Example,
  //... add reducer
});

export default RootReducer;
