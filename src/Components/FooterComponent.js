import React from "react";

function Footer(props) {
  return (
    <div className="footer row fixed-bottom">
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
  );
}

export default Footer;
