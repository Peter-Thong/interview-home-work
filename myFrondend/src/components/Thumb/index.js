import React from "react";
import { Wrapper } from "./Thumb.styles";

import { Accordion, Card } from "react-bootstrap";

import Comment from "../Comment";

import { Link } from "react-router-dom";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import CardImg from "../../images/user-img.jpg";

const Thumb = React.forwardRef(({ post }, ref) => {
  //trim body for homepage
  const maxLength = 100;

  let trimmedBody = post.body.substr(0, maxLength);
  trimmedBody = trimmedBody.substr(
    0,
    Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" "))
  );

  //created to support Accordion
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button type="button" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }

  return (
    <Wrapper ref={ref}>
      <Card>
        <Card.Header>
          <Link to={`/${post.id}`}>
            <img src={CardImg} alt="post-img" />
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Text>{post.authorName}</Card.Text>
          <Card.Text>{post.createdDate}</Card.Text>
          <Link to={`/${post.id}`}>
            <Card.Title>{post.title}</Card.Title>
          </Link>
          <Card.Text>{trimmedBody}</Card.Text>

          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">
                  {post.comments.length} replies
                </CustomToggle>
              </Card.Header>
              {post.comments.map((comment) => (
                <Accordion.Collapse key={comment.id} eventKey="0">
                  <Comment author={comment.author} body={comment.body} />
                </Accordion.Collapse>
              ))}
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </Wrapper>
  );
});

export default Thumb;
