import { takeLatest } from "redux-saga/effects";
import { handleGetPost } from "./handlers/post";

import { GET_POSTS } from "../Post/post.types";

export function* watcherSaga() {
  yield takeLatest(GET_POSTS, handleGetPost);
}
