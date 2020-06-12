import React from "react";
import { Card, CardBody, Button, Label, Col } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

function DoctorsLogin(props) {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));

  const handleSubmit = (values) => {
    props.postDoctorsLogin(values.phoneNumber, values.password);
  };

  return (
    <React.Fragment>
      <div className="container col-12 col-sm-6">
        <Card className="loginCard">
          <img
            src={require("../images/user.png")}
            alt="user"
            className="userImg"
          />
          <CardBody className="login-body">
            <Form
              model="DoctorsLogin"
              onSubmit={(values) => handleSubmit(values)}
            >
              <Col className="col-12 col-sm-8 phoneContainer" dir="ltr">
                <Label htmlFor="phoneNumber">
                  لطفا شماره همراه خود را وارد کنید
                </Label>
                <Control.text
                  model=".phoneNumber"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="شماره همراه"
                  className="form-control text-center mt-2"
                  validators={{
                    required,
                    isNumber,
                    minLength: minLength(11),
                    maxLength: maxLength(11),
                  }}
                  persist
                />
                <Errors
                  className="text-danger"
                  model=".phoneNumber"
                  show="touched"
                  messages={{
                    required: "لطفا شماره تلفن خود را وارد کنید* ",
                    isNumber: "لطفا فقط از اعداد استفاده کنید* ",
                    minLength: "اجازه ورود فقط 11 رقم را دارید* ",
                    maxLength: "اجازه ورود فقط 11 رقم را دارید* ",
                  }}
                />
              </Col>
              <Col className="col-12 col-sm-8 phoneContainer" dir="ltr">
                <Label htmlFor="password">لطفا رمز خود را وارد نمایید</Label>
                <Control
                  type="password"
                  model=".password"
                  id="password"
                  name="password"
                  placeholder="رمز عبور"
                  className="form-control text-center mt-2"
                  validators={{
                    required,
                    isNumber,
                    minLength: minLength(8),
                    maxLength: maxLength(256),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: "لطفا شماره تلفن خود را وارد کنید* ",
                    isNumber: "لطفا فقط از اعداد استفاده کنید* ",
                    minLength: "حداقل دارای 8 رقم* ",
                    maxLength: "حداکثر دارای 256 رقم* ",
                  }}
                />
              </Col>
              <Button type="submit" color="primary" className="login-btn">
                ورود
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default DoctorsLogin;
