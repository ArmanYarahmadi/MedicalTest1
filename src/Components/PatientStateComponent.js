import React from "react";
import PatientHeader from "./PatientHeaderComponent";

const PatientState = (props) => {
  return (
    <div className="container mt-5">
      <PatientHeader doctorId={props.doctorId} />
      <h2 className="mt-5">قسمت شرح حال</h2>
    </div>
  );
};

export default PatientState;
