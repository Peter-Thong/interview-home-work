import { combineReducers } from "redux";

import postReducer from "./Post/post.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
