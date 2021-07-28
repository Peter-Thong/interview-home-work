import React, { useEffect } from "react";

import Post from "./Post";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/Post/post.actions";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
