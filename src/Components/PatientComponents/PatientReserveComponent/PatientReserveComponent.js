import React from "react";
import PatientHeader from "../../Headers/PatientHeader/PatientHeaderComponent";
import { Link } from "react-router-dom";
import "./styles.css";

const PatientReserve = (props) => {
  const handleReserve = () => {
    if (localStorage.token) {
      alert("ارسال لیست نوبت دهی");
      return "/";
    } else {
      return "/patientslogin";
    }
  };

  return (
    <>
      <PatientHeader doctorId={props.doctorId} />
      <div className="container mt-5">
        <h2 className="mt-5">قسمت شرح حال</h2>
        <Link className="" to={handleReserve}>
          تست نوبت دهی
        </Link>
      </div>
    </>
  );
};

export default PatientReserve;
