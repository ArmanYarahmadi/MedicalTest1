import React, { useEffect } from "react";
import PatientHeader from "./PatientHeaderComponent";
import { withRouter } from "react-router-dom";

const PatientState = (props) => {
  useEffect(() => {
    window.onpopstate = handleBackOrForwardButton;
  });

  const handleBackOrForwardButton = (event) => {
    event.preventDefault();
    props.history.push(`/doctors/${props.doctorId}/reserve`);
  };

  return (
    <div className="container mt-5">
      <PatientHeader doctorId={props.doctorId} />
      <h2 className="mt-5">قسمت شرح حال</h2>
    </div>
  );
};

export default withRouter(PatientState);
