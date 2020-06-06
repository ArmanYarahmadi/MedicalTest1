import React from "react";

function Footer(props) {
  return (
    <div className="footer fixed-bottom">
      <div className="container">
        <div className="col-auto row">
          <div className="footer-item col-4">
            <a className="footer-item-text nav-link" href="/">
              <span className="fa fa-users fa-lg" />
              <br />
              پشتیبانی
            </a>
          </div>
          <div className="footer-item col-4">
            <a className="footer-item-text nav-link" href="/">
              <span className="fa fa-home fa-lg" />
              <br />
              خانه
            </a>
          </div>
          <div className="footer-item col-4">
            <a className="footer-item-text nav-link" href="/">
              <span className="fa fa-comments fa-lg" />
              <br />
              گفتگوها
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
