import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-auto row">
          <div className="footer-item col-4">
            <a className="footer-item-text nav-link" href="/">
              <span className="fa fa-users fa-lg"></span>
              <br /> پشتیبانی
            </a>
          </div>
          <div className="footer-item col-4">
            <a className="footer-item-text nav-link" href="/">
              <span className="fa fa-home fa-lg"></span>
              <br /> خانه
            </a>
          </div>
          <div className="footer-item col-4">
            <a className="footer-item-text nav-link" href="/">
              <span className="fa fa-comments fa-lg"></span>
              <br /> گفتگو ها
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
