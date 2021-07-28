import React from "react";
import { Wrapper } from "./Post.styles";

import { Card, Button } from "react-bootstrap";

const Post = React.forwardRef(({ post }, ref) => {
  return (
    <Wrapper ref={ref}>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>Author: {post.authorName}</Card.Text>
          <Card.Text>Created at: {post.createdDate}</Card.Text>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">{post.comments.length} replies</Button>
        </Card.Body>
      </Card>
    </Wrapper>
  );
});

export default Post;
