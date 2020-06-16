import React from "react";
import PatientHeader from "./PatientHeaderComponent";
import { Link } from "react-router-dom";

const PatientReserve = (props) => {
  const handleReserve = () => {
    if (localStorage.authToken) {
      return `/doctors/${props.doctorId}/reserve`;
    } else {
      return "/patientslogin";
    }
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

export default PatientReserve;
