import { GET_POSTS } from "./post.types";

import axios from "axios";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:

    default:
      return state;
  }
};

export default reducer;
