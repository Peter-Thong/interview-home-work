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
        <Link to="/" className="nav-link">
          {/* <Nav.Link eventKey="disabled" disabled> */}
          <img src={Logo} alt="logo" />
          {/* </Nav.Link> */}
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Blogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          <div className="circular--landscape">
            <img src={UserPhoto} alt="user-photo" />
          </div>
          <p>Young Buffalo</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Wrapper>
);

export default NavigationBar;
