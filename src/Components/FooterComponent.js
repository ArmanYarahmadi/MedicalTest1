import React from "react";

function Footer(props) {
  return (
    <div className="footer fixed-bottom">
      <div className="footer-item-container col-12 row">
        <div className="col-4 footer-item ">
          <a className="footer-item-text nav-link" href="/">
            <span className="fa fa-users fa-lg" />
            <br />
            پشتیبانی
          </a>
        </div>
        <div className="col-4 footer-item">
          <a className="footer-item-text nav-link" href="/">
            <span className="fa fa-home fa-lg" />
            <br />
            خانه
          </a>
        </div>
        <div className="col-4 footer-item ">
          <a className="footer-item-text nav-link" href="/">
            <span className="fa fa-comments fa-lg" />
            <br />
            گفتگوها
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
