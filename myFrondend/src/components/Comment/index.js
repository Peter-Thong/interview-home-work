import React from "react";

import { Wrapper } from "./Comment.styles";

import UserPhoto from "../../images/user-img-2.jpg";

const Comment = ({ author, body }) => (
  <Wrapper>
    <p className="user">
      <div className="circular--landscape">
        <img src={UserPhoto} alt="user-photo" />
      </div>
      <p>{author}</p>
    </p>
    <p>{body}</p>
  </Wrapper>
);

export default Comment;
