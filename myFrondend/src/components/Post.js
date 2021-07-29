import React from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { Card } from "react-bootstrap";

import { Wrapper } from "./Post.styles";

import Comment from "./Comment";

import CardImg from "../images/user-img.jpg";

const Post = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const postFilter = posts.filter((ps) => ps.id == postId);
  const post = postFilter[0];

  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>Author: {post.authorName}</Card.Text>
          <Card.Text>Created at: {post.createdDate}</Card.Text>

          <img src={CardImg} alt="post-img" />
          <Card.Text className="content">{post.body}</Card.Text>

          <Card.Title>Comments</Card.Title>
          {post.comments.map((comment) => (
            <Comment
              key={comment.id}
              author={comment.author}
              body={comment.body}
            />
          ))}
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default Post;
