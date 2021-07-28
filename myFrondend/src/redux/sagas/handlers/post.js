import { call, put } from "@redux-saga/core/effects";
import { requestGetPost } from "../requests/post";

import { setPosts } from "../../Post/post.actions";
import { loadingTrue, loadingFalse } from "../../Loading/loading.action";
import { setError } from "../../Error/error.action";

export function* handleGetPost(action) {
  try {
    yield put(loadingTrue());
    const response = yield call(requestGetPost);
    const { data } = response;
    yield put(setPosts(data));
    yield put(loadingFalse());
  } catch (error) {
    yield put(setError(error));
  }
}
