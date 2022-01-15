import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter";
import { tasksReducer } from "./tasks";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer
})

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

export default store