import { SET_POSTS } from "./post.types";

const INITIAL_STATE = {
  posts: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      const { posts } = action;
      return { ...state, posts };
    default:
      return state;
  }
};

export default reducer;
