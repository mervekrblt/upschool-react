// ADD_POST,
//   REMOVE_POST(id),
//   UPDATE_POST(id, title),
//   ADD_COMMENT(id, userId, comment),
//   REMOVE_COMMENT(id),
//   REMOVE_USER_COMMENTS(userId),
//   ADD_UP_VOTE(id),
//   ADD_DOWN_VOTE(id);

//TYPES ACTIONS
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const REMOVE_USER_COMMENTS = "REMOVE_USER_COMMENTS";
const ADD_UP_VOTE = "ADD_UP_VOTE";
const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";

//ACTION CREATORS
export const addPost = (id, title) => {
  return {
    type: ADD_POST,
    payload: {
      id,
      title,
      comments: [],
      votes: {
        up: 0,
        down: 0,
      },
    },
  };
};

export const addUpVote = (id) => {
  return {
    type: ADD_UP_VOTE,
    payload: id,
  };
};

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

//REDUCER

export const postReducer = (posts = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...posts, action.payload];
    case ADD_UP_VOTE:
      return posts.map((post) => {
        if (post.id == action.payload) {
          return { ...post, votes: { ...post.votes, up: post.votes.up + 1 } };
        }
        return post;
      });
    case REMOVE_POST:
      return posts.filter(post => post.id != action.payload)
    default:
      return posts;
  }
};
