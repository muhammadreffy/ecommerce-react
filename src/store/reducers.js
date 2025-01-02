import { combineReducers } from "redux";
import { userReducer } from "./user";
import { counterReducer } from "./counter";

export const reducers = combineReducers({
  user: userReducer,
  counter: counterReducer,
});
