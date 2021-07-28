import { GET_POSTS, SET_POSTS } from "./post.types";

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};
