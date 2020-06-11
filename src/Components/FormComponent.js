import React, { useState } from "react";
import { Form, FormGroup, Button, ButtonGroup } from "reactstrap";
import Gallery from "./GalleryComponent";
import Select from "react-select";

const FormComponent = (props) => {
  const [selectedGender, setSelectedGender] = useState(1);
  const [selectedOption, setSelectedOption] = useState({
    value: "1",
    label: "همه",
  });
  const [showMore, setShowMore] = useState(false);

  const options = [
    { value: "1", label: "همه" },
    { value: "2", label: "پزشک عمومی" },
    { value: "3", label: "متخصص گوارش" },
    { value: "4", label: "متخصص داخلی" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const RenderButton = () => {
    if (showMore) return <div>مشاهده کمتر</div>;
    else return <div>مشاهده بیشتر</div>;
  };

  return (
    <>
      <div className="container">
        <Form className="formComponent">
          <h5 className="form-title">تخصص مورد نیاز را انتخاب کنید</h5>
          <div>
            <FormGroup className="selector">
              <Select
                value={selectedOption}
                className="formInput col-12 col-sm-4"
                type="select"
                name="select"
                id="proSelect"
                onChange={handleChange}
                options={options}
              />
            </FormGroup>
          </div>
          <h5 className="form-title">جنسیت پزشک مورد نظر را انتخاب کنید</h5>
          <div className="">
            <ButtonGroup checkbox className="radiobox col-12">
              <div className="col-4">
                <Button
                  className="buttons"
                  outline
                  size="sm"
                  onClick={() => setSelectedGender(1)}
                  active={selectedGender === 1}
                >
                  <div>
                    همه <br />
                    <span className="fa fa-user-md lg"></span>
                  </div>
                </Button>
              </div>
              <div className="col-4">
                <Button
                  className="buttons"
                  outline
                  size="sm"
                  onClick={() => setSelectedGender(2)}
                  active={selectedGender === 2}
                >
                  <div>
                    خانم <br />
                    <span className="fa fa-female lg"></span>
                  </div>
                </Button>
              </div>
              <div className="col-4">
                <Button
                  className="buttons"
                  outline
                  size="sm"
                  onClick={() => setSelectedGender(3)}
                  active={selectedGender === 3}
                >
                  <div>
                    آقا <br />
                    <span className="fa fa-male lg"></span>
                  </div>
                </Button>
              </div>
            </ButtonGroup>
          </div>
        </Form>
      </div>
      <hr />
      <div className="container">
        <span
          className="btn btn-sm showmore mb-2 "
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <RenderButton />
        </span>
        <Gallery
          gender={selectedGender}
          pro={selectedOption.value}
          show={showMore}
          doctors={props.doctors}
        />
      </div>
    </>
  );
};

export default FormComponent;
