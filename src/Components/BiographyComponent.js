import React, { useEffect } from "react";
import { DOCTORS } from "../assets/shared/doctors";
import ResponsivePlayer from "./VideoPlayerComponent";
import PatientHeader from "./PatientHeaderComponent";
import { withRouter } from "react-router-dom";

const Biography = (props) => {
  const doctors = DOCTORS;
  const doctor = doctors.filter((doctor) => doctor.id === props.doctorId)[0];

  useEffect(() => {
    window.onpopstate = handleBackOrForwardButton;
  });

  const handleBackOrForwardButton = (event) => {
    event.preventDefault();
    props.history.push(`/home`);
  };

  return (
    <>
      <PatientHeader doctorId={props.doctorId} />
      <div className="biography container">
        <p className="bio-text text-right">
          سلام <br />
          من {doctor.name} هستم . فارغ التحصیل پزشکی عمومی از دانشگاه سلام من
          دکتر {doctor.name} هستم . فارغالتحصیل پزشکی عمومی از دانشگاه علوم
          پزشکی شیراز و دانشجوی برتر در دوران تحصیل علوم پزشکی شیراز و دانشجوی
          برتر در دوران تحصیل{" "}
        </p>
        <ResponsivePlayer />
        <hr className="blue-divider" />
      </div>
    </>
  );
};

export default withRouter(Biography);
