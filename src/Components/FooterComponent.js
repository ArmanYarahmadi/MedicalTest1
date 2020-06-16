import React from "react";

function Footer(props) {
  return (
    <div className="footer-co row fixed-bottom">
      <div className="col-4 footer-item ">
        <a className="footer-item-text " href="/">
          پشتیبانی
        </a>
      </div>
      <div className="col-4 footer-item">
        <a className="footer-item-text " href="/">
          خانه
        </a>
      </div>
      <div className="col-4 footer-item ">
        <a className="footer-item-text " href="/">
          گفتگوها
        </a>
      </div>
    </div>
  );
}

export default Footer;
