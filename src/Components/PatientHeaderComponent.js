import React from "react";

import { NavLink } from "react-router-dom";

const PatientHeader = (props) => {
  return (
    <div className="header row fixed-top">
      <div className="col-4 header-item">
        <NavLink
          activeClassName="active-header-item-text"
          className="header-item-text"
          to={`/doctors/${props.doctorId}/bio`}
        >
          بیوگرافی
        </NavLink>
      </div>
      <div className="col-4 header-item">
        <NavLink
          activeClassName="active-header-item-text"
          className="header-item-text"
          to={`/doctors/${props.doctorId}/reserve`}
        >
          نوبت دهی
        </NavLink>
      </div>
      <div className="col-4 header-item ">
        <NavLink
          activeClassName="active-header-item-text"
          className="header-item-text"
          to={`/doctors/${props.doctorId}/state`}
        >
          شرح حال
        </NavLink>
      </div>
    </div>
  );
};

export default PatientHeader;
