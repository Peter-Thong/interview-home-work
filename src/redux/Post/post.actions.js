import { GET_POSTS } from "./post.types";

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};
