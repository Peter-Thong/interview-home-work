import React from "react";

import { Wrapper } from "./Comment.styles";

const Comment = ({ name, body }) => (
  <Wrapper>
    <h3>{name}</h3>
    <p>{body}</p>
  </Wrapper>
);

export default Comment;
