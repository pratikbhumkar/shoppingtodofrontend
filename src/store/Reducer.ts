import { combineReducers } from "redux";
import ToDoReducer  from "./ToDoReducer/ToDoReducer";

const Reducer= combineReducers({
    ToDo: ToDoReducer,
})

export default Reducer;