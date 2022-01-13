//Action types
const INCREMENT = "INCREMENT"

//Action creators
export const increment = (value = 1) => {
  return {
    type: "INCREMENT",
    payload: value
  }
}

//Reducer
export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload
    default:
      return state;
  }
}

