import React, { useState } from "react";
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header row fixed-top">
      <div className="navBarContainer">
        <Navbar light expand="md">
          <div className="container">
            <NavbarToggler className="ml-auto" onClick={toggleNav} />
            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="mr-4">
                  <a className="nav-link active" href="/">
                    <span className="fa fa-home fa-lg"></span> خانه
                  </a>
                </NavItem>
                <NavItem className="mr-4">
                  <a className="nav-link" href="/">
                    <span className="fa fa-info fa-lg"></span> درباره ما
                  </a>
                </NavItem>
                <NavItem className="mr-4">
                  <a className="nav-link" href="/">
                    <span className="fa fa-list fa-lg"></span> فهرست
                  </a>
                </NavItem>
                <NavItem className="mr-4">
                  <a className="nav-link" href="/">
                    <span className="fa fa-address-card fa-lg"></span> تماس با
                    ما
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
      <div className="mr-auto">
        <div className="footer-item col-4">
          <a className="footer-item-text nav-link" href="/">
            <span className="fa fa-search fa-2x"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
