import React from "react";

import { Wrapper } from "./Comment.styles";

const Comment = ({ author, body }) => (
  <Wrapper>
    <h3>{author}</h3>
    <p>{body}</p>
  </Wrapper>
);

export default Comment;
