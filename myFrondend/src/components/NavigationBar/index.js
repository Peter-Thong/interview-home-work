import React from "react";

import { Wrapper } from "./Navigationbar.styles";

import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";

import Logo from "../../images/logo.svg";
import UserPhoto from "../../images/user-img-1.jpg";

const NavigationBar = () => (
  <Wrapper>
    <Nav justify variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Link to="/">
          <Nav.Link eventKey="disabled" disabled>
            <img src={Logo} alt="logo" />
          </Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/">
          <Nav.Link href="/">Blogs</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          <div class="circular--landscape">
            <img src={UserPhoto} alt="user-photo" />
          </div>
          <p>Young Buffalo</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Wrapper>
);

export default NavigationBar;
