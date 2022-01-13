import { combineReducers, createStore } from "redux";
import { countReducer } from "./count";
import { postReducer } from "./posts";
const rootReducer = combineReducers({
  count: countReducer,
  post: postReducer
})

const store = createStore(rootReducer)

export default store