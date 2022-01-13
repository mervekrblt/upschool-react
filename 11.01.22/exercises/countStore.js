import { createStore } from "redux"
// ACTION TYPES
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

//ACTION CREATORS
const increment = (value = 1) => ({
  type: INCREMENT,
  payload: value
})

const decrement = (value = 1) => ({
  type: DECREMENT,
  payload: value
})
//REDUCER

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + action.payload
    case DECREMENT:
      return count - action.payload
  
    default:
      return count
  }
}

//STORE

const store = createStore(countReducer)
store.dispatch(increment(1))
store.dispatch(increment(10))
console.log(store.getState())