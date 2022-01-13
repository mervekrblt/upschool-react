import { createStore } from "redux";

const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

const addPost = (id, title) => {
  return {
    type: ADD_POST,
    payload: { id, title },
  };
};

const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

const initialPost = {
  count: 0,
  posts: [{ id: 0, title: "add post" }],
};

const postReducer = (state = initialPost, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(postReducer);

store.dispatch(addPost(1, "hello"));
store.dispatch(addPost(2, "hello merve"));
store.dispatch(removePost(2));

console.log(store.getState());