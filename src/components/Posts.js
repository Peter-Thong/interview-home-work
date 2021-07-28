import React, { useState, useEffect } from "react";

import Post from "./Post";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/Post/post.actions";

import axios from "axios";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const postss = useSelector((state) => state.posts.posts);
  console.log(postss);

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
  //     const postData = res.data;
  //     const updatedPosts = postData.map((post) => {
  //       axios
  //         .get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
  //         .then((res) => {
  //           const authorName = res.data.name;
  //           post.authorName = authorName;
  //         });
  //       axios
  //         .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
  //         .then((res) => {
  //           const comments = res.data;
  //           post.comments = comments;
  //         });
  //       post.createdDate = "29 July, 2021";
  //       return post;
  //     });
  //     setPosts([...posts, ...updatedPosts]);
  //   });
  // }, []);

  // console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
