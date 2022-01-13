import store from "./ReduxStore/index";
import { increment } from "./ReduxStore/count";
import {
  addComment,
  addPost,
  addUpVote,
  addDownVote,
  removePost,
  removeUserComments,
  updatePost,
} from "./ReduxStore/posts";

store.dispatch(increment(15));
store.dispatch(addPost(1, "Hello"));
store.dispatch(addPost(2, "Second Post"));
store.dispatch(addPost(3, "Third Post"));
store.dispatch(addDownVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(2));
store.dispatch(addUpVote(2));
//store.dispatch(removePost(3))
store.dispatch(updatePost(2, "changed"));
store.dispatch(addComment(1, 1, "first comment"));
store.dispatch(addComment(1, 2, "second comment"));
//store.dispatch(removeUserComments(1));
console.log(store.getState().post[0]);
