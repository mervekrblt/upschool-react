import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { counterReducer } from "./counter";
import { tasksReducer } from "./tasks";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["counter"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
export const persistor = persistStore(store)
store.subscribe(() => console.log(store.getState()))

export default store