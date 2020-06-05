import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header row">
      <div className="mr-auto">
        <div className="footer-item col-4">
          <a className="footer-item-text nav-link" href="/">
            <span className="fa fa-search fa-2x"></span>
          </a>
        </div>
      </div>
      <div className="navBarContainer">
        <Navbar light expand="md">
          <div className="container">
            <NavbarToggler className="ml-auto" onClick={toggleNav} />
            <NavbarBrand href="/"></NavbarBrand>
            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="mr-4">
                  <a className="nav-link active" href="/">
                    خانه <span className="fa fa-home fa-lg"></span>
                  </a>
                </NavItem>
                <NavItem className="mr-4">
                  <a className="nav-link" href="/">
                    درباره ما <span className="fa fa-info fa-lg"></span>
                  </a>
                </NavItem>
                <NavItem className="mr-4">
                  <a className="nav-link" href="/">
                    فهرست <span className="fa fa-list fa-lg"></span>
                  </a>
                </NavItem>
                <NavItem className="mr-4">
                  <a className="nav-link" href="/">
                    تماس با ما{" "}
                    <span className="fa fa-address-card fa-lg"></span>
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
