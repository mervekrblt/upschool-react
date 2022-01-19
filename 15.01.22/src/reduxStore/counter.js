//types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
//creator
export const increment = (value = 1) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value = 1) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
//reducer
export const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + action.payload;
    case DECREMENT:
      return count - action.payload;
    default:
      return count;
  }
};
