import React from "react";
import { Wrapper } from "./Post.styles";

import { Accordion, Card, Button } from "react-bootstrap";

import Comment from "../Comment";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

const Post = React.forwardRef(({ post }, ref) => {
  const maxLength = 100;

  let trimmedBody = post.body.substr(0, maxLength);
  trimmedBody = trimmedBody.substr(
    0,
    Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" "))
  );

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Wrapper ref={ref}>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>Author: {post.authorName}</Card.Text>
          <Card.Text>Created at: {post.createdDate}</Card.Text>
          <Card.Text>{trimmedBody}</Card.Text>

          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">Click me!</CustomToggle>
              </Card.Header>
              {post.comments.map((comment) => (
                <Accordion.Collapse key={comment.id} eventKey="0">
                  <Comment name={comment.name} body={comment.body} />
                </Accordion.Collapse>
              ))}
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </Wrapper>
  );
});

export default Post;
