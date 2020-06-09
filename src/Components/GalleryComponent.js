import React, { Component } from "react";
import { DOCTORS } from "../shared/doctors";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: DOCTORS,
    };
  }

  render() {
    let doctors = this.state.doctors.filter(
      (doctor) =>
        (parseInt(doctor.gender) === this.props.gender ||
          this.props.gender === 1) &&
        (parseInt(doctor.pro) === parseInt(this.props.pro) ||
          parseInt(this.props.pro) === 1)
    );

    const RenderImage = doctors.map((doctor, i) => {
      if (this.props.show) {
        return (
          <div className="col-6  col-sm-4 mb-2">
            <Card className="card ">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="cardImgDoctor"
              />
              <CardBody>
                <CardTitle>{doctor.name}</CardTitle>
                <hr />
                <CardSubtitle>{doctor.profession}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        );
      } else if (i <= 3) {
        return (
          <div className="col-6  col-sm-4 mb-2">
            <Card className="card">
              <CardImg
                top
                width="100%"
                src={doctor.image}
                alt={doctor.name}
                className="cardImgDoctor"
              />
              <CardBody>
                <CardTitle>{doctor.name}</CardTitle>
                <hr />
                <CardSubtitle>{doctor.profession}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        );
      } else {
        return <></>;
      }
    });

    return <div className="gallery row">{RenderImage}</div>;
  }
}
export default Gallery;
