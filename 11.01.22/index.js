import store from './ReduxStore/index'
import {increment} from './ReduxStore/count'
import {addPost, addUpVote, removePost} from './ReduxStore/posts'

store.dispatch(increment(15))
store.dispatch(addPost(1, "Hello"))
store.dispatch(addPost(2, "Second Post"))
store.dispatch(addPost(3, "Third Post"))
store.dispatch(addUpVote(1))
store.dispatch(addUpVote(2))
store.dispatch(addUpVote(2))
store.dispatch(removePost(3))
console.log(store.getState().post)
