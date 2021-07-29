import { combineReducers } from "redux";

//redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postReducer from "./Post/post.reducer";
import pageReducer from "./Page/page.reducer";
import loadingReducer from "./Loading/loading.reducer";
import errorReducer from "./Error/error.reducer";
import searchTermReducer from "./SearchTerm/searchTerm.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  posts: postReducer,
  page: pageReducer,
  loading: loadingReducer,
  error: errorReducer,
  searchTerm: searchTermReducer,
});

export default persistReducer(persistConfig, rootReducer);
