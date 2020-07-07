import React, { useEffect } from "react";
import PatientHeader from "./PatientHeaderComponent";
import { Link, withRouter } from "react-router-dom";

const PatientReserve = (props) => {
  const handleReserve = () => {
    if (localStorage.authToken) {
      return `/doctors/${props.doctorId}/reserve`;
    } else {
      return `/patients/${props.doctorId}/login`;
    }
  };

  useEffect(() => {
    window.onpopstate = handleBackOrForwardButton;
  });

  const handleBackOrForwardButton = (event) => {
    event.preventDefault();
    props.history.push(`/doctors/${props.doctorId}/bio`);
  };

  return (
    <>
      <PatientHeader doctorId={props.doctorId} />
      <div className="container mt-5">
        <h2 className="mt-5">قسمت نوبت دهی</h2>
        <Link className="" to={handleReserve}>
          تست نوبت دهی
        </Link>
      </div>
    </>
  );
};

export default withRouter(PatientReserve);
