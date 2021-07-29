import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/Post/post.actions";

import { Card } from "react-bootstrap";

import Comment from "./Comment";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const postFilter = posts.filter((ps) => ps.id == postId);
  const post = postFilter[0];

  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>

        <Card.Text>Author: {post.authorName}</Card.Text>
        <Card.Text>Created at: {post.createdDate}</Card.Text>
        <Card.Text>{post.body}</Card.Text>
        {post.comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            body={comment.body}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Post;
