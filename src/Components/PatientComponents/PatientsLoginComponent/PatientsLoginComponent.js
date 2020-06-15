import React, { useState } from "react";
import { Card, CardBody, Button, Label, Col, Collapse } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import Header from "../../Headers/HomeHeader/HeaderComponent";
import "./styles.css";

function PatientsLogin(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempToken, setTempToken] = useState("");

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));

  const alertLogin = (login) => {
    alert(JSON.stringify(login));
  };

  const handleSubmit = (values) => {
    props
      .postPatientsLogin(values.phoneNumber)
      .then((res) => {
        if (res.ok) {
          alertLogin("بیمار وجود دارد");
          localStorage.setItem("authToken", res.data.authToken);
          console.log(res.data);
        } else {
          alertLogin("بیمار باید اضافه شود");
          setTempToken(res.data.token);
          setIsOpen(true);
        }
      })
      .catch((err) => {
        alertLogin(err.response.data.message);
        console.log(err);
      });
  };

  const handleSubmitPassword = (values) => {
    props
      .postPatientsLoginPassword(values.password, tempToken)
      .then((res) => {
        alertLogin("شما با موفقیت اضافه شدید");
        localStorage.setItem("authToken", res.data.authToken);
      })
      .catch((err) => {
        alertLogin(err.response.data.message);
        console.log(err);
      });

    props.resetPatientsLoginPasswordForm();
  };

  return (
    <>
      <Header headerTitle="ورود" />
      <div className="container col-12 col-sm-6">
        <Card className="loginCard">
          <img
            src={require("../../../images/user.png")}
            alt="user"
            className="userImg"
          />
          <CardBody className="login-body">
            <Form
              model="PatientsLogin"
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
                    required: "لطفا این بخش را پر کنید* ",
                    isNumber: "لطفا فقط از اعداد استفاده کنید* ",
                    minLength: "اجازه ورود فقط 11 رقم را دارید* ",
                    maxLength: "اجازه ورود فقط 11 رقم را دارید* ",
                  }}
                />
              </Col>
              <Button type="submit" color="primary" className="login-btn">
                تایید
              </Button>
            </Form>
            <Collapse isOpen={isOpen}>
              <Form
                className="mt-3"
                model="PatientsLoginPassword"
                onSubmit={(values) => handleSubmitPassword(values)}
              >
                <Label htmlFor="password">
                  لطفا رمز ارسال شده را وارد کنید
                </Label>
                <Col className="col-12 col-sm-8 passwordContainer" dir="ltr">
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
                      minLength: minLength(4),
                      maxLength: maxLength(4),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: "لطفا این بخش را پر کنید* ",
                      isNumber: "لطفا فقط از اعداد استفاده کنید* ",
                      minLength: "کد 4 رقمی است* ",
                      maxLength: "کد 4 رقمی است* ",
                    }}
                  />
                </Col>
                <Button type="submit" color="primary" className="login-btn">
                  ورود
                </Button>
              </Form>
            </Collapse>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default PatientsLogin;
