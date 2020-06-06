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
    const RenderImage = this.state.doctors.map((doctor) => {
      if (
        (parseInt(doctor.gender) === this.props.gender ||
          this.props.gender === 1) &&
        (parseInt(doctor.pro) === parseInt(this.props.pro) ||
          parseInt(this.props.pro) === 1)
      ) {
        return (
          <div className="col-6  col-sm-4 mb-2">
            <Card className="card">
              <CardImg top width="100%" src={doctor.image} alt={doctor.name} />
              <CardBody>
                <CardTitle>{doctor.name}</CardTitle>
                <hr />
                <CardSubtitle>{doctor.profession}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        );
      } else return <></>;
    });
    return <div className="gallery row">{RenderImage}</div>;
  }
}

export default Gallery;
