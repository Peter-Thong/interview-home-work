import React from "react";
import { Wrapper } from "./Post.styles";

import { Card, Button } from "react-bootstrap";

const Post = ({ post }) => {
  console.log(post.authorName);
  console.log(post.createdDay);
  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>Author: {post.authorName}</Card.Text>
          <Card.Text>Created at: {post.createdDay}</Card.Text>
          <Card.Text>{post.content}</Card.Text>
          {/* <Button variant="primary">{post.comments.length} replies</Button> */}
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default Post;
