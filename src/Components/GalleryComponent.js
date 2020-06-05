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
      if (doctor.gender == this.props.gender || this.props.gender === 1) {
        return (
          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <Card>
              <CardImg
                top
                width="100%"
                src={doctor.image}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{doctor.name}</CardTitle>
                <hr />
                <CardSubtitle>{doctor.profetion}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        );
      } else return <></>;
    });
    return <div className="gallery container row">{RenderImage}</div>;
  }
}

export default Gallery;
