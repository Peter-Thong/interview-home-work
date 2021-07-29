import React from "react";

import { Wrapper } from "./Comment.styles";

import UserPhoto from "../../images/user-img-2.jpg";

const Comment = ({ author, body }) => (
  <Wrapper>
    <div className="user">
      <div className="circular--landscape">
        <img src={UserPhoto} alt="user-photo" />
      </div>
      <p>{author}</p>
    </div>
    <p>{body}</p>
  </Wrapper>
);

export default Comment;
