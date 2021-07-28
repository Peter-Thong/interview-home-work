import React from "react";

import { Wrapper } from "./Navigationbar.styles";

import { Nav } from "react-bootstrap";

const NavigationBar = () => (
  <Wrapper>
    <Nav fill variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Logo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Blogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          User
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Wrapper>
);

export default NavigationBar;
