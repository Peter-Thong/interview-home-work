import { call, put } from "@redux-saga/core/effects";
import { requestGetPost } from "../requests/post";

import { setPosts } from "../../Post/post.actions";

export function* handleGetPost(action) {
  try {
    const response = yield call(requestGetPost);
    const { data } = response;
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}
