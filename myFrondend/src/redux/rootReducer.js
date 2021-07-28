import { combineReducers } from "redux";

import postReducer from "./Post/post.reducer";
import pageReducer from "./Page/page.reducer";
import loadingReducer from "./Loading/loading.reducer";
import errorReducer from "./Error/error.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  page: pageReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;
