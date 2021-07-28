import React from "react";
import { Wrapper } from "./Blog.styles";

import { Card, Button } from "react-bootstrap";

const Blog = ({ blog }) => {
  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>Author: {blog.author}</Card.Text>
          <Card.Text>Created at: {blog.createdDay}</Card.Text>
          <Card.Text>{blog.content}</Card.Text>
          <Button variant="primary">{blog.comments.length} replies</Button>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default Blog;
