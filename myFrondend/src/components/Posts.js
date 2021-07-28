import React, { useState, useEffect, useRef, useCallback } from "react";

import Post from "./Post";

import Spinner from "./Spinner";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/Post/post.actions";
import { increment } from "../redux/Page/page.action";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);
  const page = useSelector((state) => state.page.page);
  const loading = useSelector((state) => state.loading.loading);
  const error = useSelector((state) => state.error.error);

  const observer = useRef();
  const lastPostElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(increment());
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  // setHasMore(page < posts.length);
  const filteredPosts = posts.slice(0, page);

  return (
    <div>
      {filteredPosts.map((post, index) => {
        if (page == index + 1) {
          return (
            <Post ref={lastPostElementRef} key={post.id} post={post}></Post>
          );
        } else {
          return <Post key={post.id} post={post}></Post>;
        }
      })}

      {loading && <Spinner />}
    </div>
  );
};

export default Posts;
