import { combineReducers } from "redux";
import * as AddTaskReducers from "./AddTaskReducer";

export default combineReducers({ ...AddTaskReducers });
