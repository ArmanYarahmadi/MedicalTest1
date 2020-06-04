import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, ButtonGroup } from "reactstrap";

const FormComponent = (props) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="container">
      <Form className="formComponent">
        <h5>تخصص مورد نیاز را انتخاب کنید</h5>
        <div>
          <FormGroup className="selector">
            <Input type="select" name="select" id="exampleSelect">
              <option>پزشک عمومی</option>
              <option>پزشک خصوصی</option>
            </Input>
          </FormGroup>
        </div>
        <h5>جنسیت پزشک مورد نظر را انتخاب کنید</h5>
        <div className="">
          <ButtonGroup checkbox className="radiobox col-12">
            <div className="buttons col-4">
              <Button
                outline
                color="info"
                size="lg"
                onClick={() => setSelected(1)}
                active={selected === 1}
              >
                <legend>همه</legend>
              </Button>
            </div>
            <div className="buttons col-4">
              <Button
                outline
                color="info"
                size="lg"
                onClick={() => setSelected(2)}
                active={selected === 2}
              >
                <legend>زن</legend>
              </Button>
            </div>
            <div className="buttons col-4">
              <Button
                outline
                color="info"
                size="lg"
                onClick={() => setSelected(3)}
                active={selected === 3}
              >
                <legend>مرد</legend>
              </Button>
            </div>
          </ButtonGroup>
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;
