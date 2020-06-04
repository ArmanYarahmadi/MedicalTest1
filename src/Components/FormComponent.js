import React from "react";
import { Form, FormGroup, Input, Label, Button, FormText } from "reactstrap";

const FormComponent = (props) => {
  return (
    <div className="formContainer">
      <Form className="formComponent">
        <h5>تخصص مورد نیاز را انتخاب کنید</h5>
        <div className="selectorContainer">
          <FormGroup className="itemSelect">
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              className="selector"
            >
              <option className="option">پزشک عمومی</option>
              <option className="option">پزشک خصوصی</option>
            </Input>
          </FormGroup>
        </div>
        <h5>جنسیت پزشک مورد نظر را انتخاب کنید</h5>
        <div className="radioboxContainer">
          <FormGroup check inline className="">
            <div className="radiocheck">
              <FormGroup check>
                <Label check>
                  <legend>
                    <Button type="radio" name="radio1">
                      همه
                    </Button>
                  </legend>
                </Label>
              </FormGroup>
            </div>
            <div className="radiocheck">
              <FormGroup check>
                <Label check>
                  <legend>
                    <Button type="radio" name="radio1">
                      زن
                    </Button>
                  </legend>
                </Label>
              </FormGroup>
            </div>
            <div className="radiocheck">
              <FormGroup check disabled>
                <Label check>
                  <legend>
                    <Button type="radio" name="radio1">
                      مرد
                    </Button>
                  </legend>
                </Label>
              </FormGroup>
            </div>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;
