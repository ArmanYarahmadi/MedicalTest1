import React from "react";
import { Card, CardBody, Button, Label, Col } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

function Login(props) {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));

  const handleSubmit = (values) => {
    props.postLogin(values.phoneNum, values.password);
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
            <Form model="Login" onSubmit={(values) => handleSubmit(values)}>
              <Col className="col-12 col-sm-8 phoneContainer" dir="ltr">
                <Label htmlFor="phoneNum">
                  لطفا شماره همراه خود را وارد کنید
                </Label>
                <Control.text
                  model=".phoneNum"
                  id="phoneNum"
                  name="phoneNum"
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
                  model=".phoneNum"
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
                    minLength: "حداقل دارای 8 عدد* ",
                    maxLength: "حداکثر دارای 15 عدد* ",
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

export default Login;
