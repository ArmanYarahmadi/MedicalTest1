import React from "react";
import { DOCTORS } from "../shared/doctors";

function Biography(props) {
  const doctors = DOCTORS;
  const doctor = doctors.filter((doctor) => doctor.id === props.doctorId)[0];

  return (
    <div className="biography container">
      <h2>
        {doctor.name}{" "}
        <span className="bio-profession">{doctor.profession}</span>
      </h2>

      <p className="mt-5">
        سلام من دکتر امیر علی نجات هستم . فارغ التحصیل پزشکی عمومی از دانشگاه
        سلام من دکتر امیر علی نجات هستم . فارغ التحصیل پزشکی عمومی از دانشگاه
        علوم پزشکی شیراز و دانشجوی برتر در دوران تحصیل علوم پزشکی شیراز و
        دانشجوی برتر در دوران تحصیل{" "}
      </p>
      <div className="bio-image-border">
        <img className="bio-image" src={doctor.image} alt={doctor.name} />
      </div>
    </div>
  );
}

export default Biography;
