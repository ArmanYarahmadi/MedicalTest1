import React, { useState } from "react";
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <React.Fragment>
      <div className="header row fixed-top">
        <div className="navBarContainer col-6" dir="ltr">
          <Navbar light expand="sm">
            <NavbarToggler className="ml-auto" onClick={toggleNav} />
            <Collapse isOpen={isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="">
                  <a className="nav-link active" href="/">
                    <span className="fa fa-home fa-lg"></span> خانه
                  </a>
                </NavItem>
                <NavItem className="">
                  <a className="nav-link" href="/">
                    <span className="fa fa-info fa-lg"></span> درباره ما
                  </a>
                </NavItem>
                <NavItem className="">
                  <a className="nav-link" href="/">
                    <span className="fa fa-list fa-lg"></span> فهرست
                  </a>
                </NavItem>
                <NavItem className="">
                  <a className="nav-link" href="/">
                    <span className="fa fa-address-card fa-lg"></span> تماس با
                    ما
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="search-container mr-auto col-3">
          <a className="header-search nav-link" href="/">
            <span className="fa fa-search fa-2x"></span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
