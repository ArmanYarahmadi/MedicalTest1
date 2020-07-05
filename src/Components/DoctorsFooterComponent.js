import React from "react";

import { NavLink } from "react-router-dom";

const DoctorFooter = (props) => {
  return (
    <div className="footer-co row fixed-bottom">
      <div className="col-4 footer-item">
        <NavLink
          activeClassName="active-footer-item-text"
          className="footer-item-text"
          to="/"
        >
          نوبت دهی
        </NavLink>
      </div>
      <div className="col-4 footer-item">
        <NavLink
          activeClassName="active-footer-item-text"
          className="footer-item-text"
          to="/"
        >
          گفتگوها
        </NavLink>
      </div>
      <div className="col-4 footer-item ">
        <NavLink
          activeClassName="active-footer-item-text"
          className="footer-item-text"
          to="/"
        >
          پشتیبانی
        </NavLink>
      </div>
    </div>
  );
};

export default DoctorFooter;
