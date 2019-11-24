import { combineReducers } from "redux";

import R_TodoList from "./R_TodoList";
import R_Splash from "./R_Splash";
//...  add other reducer imports

const RootReducer = combineReducers({
  R_TodoList,
  R_Splash,
  //... add reducer
});

export default RootReducer;
