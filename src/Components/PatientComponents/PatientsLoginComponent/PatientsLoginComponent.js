import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Label,
  Col,
  Collapse,
  Alert,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import Header from "../../Headers/HomeHeader/HeaderComponent";
import "./styles.css";

function PatientsLogin(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempToken, setTempToken] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);
  const [alertDescription, setAlertDescription] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));

  const handleSubmit = (values) => {
    setPhoneNumber(values.phoneNumber);
    props
      .postPatientsLogin(values.phoneNumber)
      .then((res) => {
        setAlertDescription("تایید تلفن همراه");
        setShow(true);
        setAlertColor("success");
        setTempToken(res.data.token);
        setIsOpen(true);
      })
      .catch((err) => {
        setAlertDescription(
          "شماره همراه وارد شده معتبر نمی باشد لطفا مجددا تلاش کنید"
        );
        setShow(true);
        setAlertColor("danger");
        console.log(err);
        props.resetPatientsLoginForm();
      });
  };

  const handleSubmitPassword = (values) => {
    props
      .postPatientsLoginPassword(phoneNumber, tempToken, values.password)
      .then((res) => {
        localStorage.setItem("authToken", res.data.authToken);
        setAlertDescription("شما با موفقیت اضافه شدید");
        setShow(true);
        setAlertColor("success");
        setIsOpen(false);
        props.resetPatientsLoginPasswordForm();
        props.resetPatientsLoginForm();
      })
      .catch((err) => {
        setAlertDescription(" کد وارد شده معتبر نمی باشد لطفا مجددا تلاش کنید");
        setShow(true);
        setAlertColor("danger");
        console.log(err);
        setIsOpen(true);
        props.resetPatientsLoginPasswordForm();
      });
  };

  return (
    <>
      <Header headerTitle="ورود" />
      <div className="container col-12 col-sm-6">
        <Card className="loginCard">
          <img
            src={require("../../../assets/images/user.png")}
            alt="user"
            className="userImg"
          />
          <CardBody className="login-body">
            <Form
              model="PatientsLogin"
              onSubmit={(values) => handleSubmit(values)}
            >
              <Col className="col-12 col-sm-8 phoneContainer" dir="ltr">
                <Collapse isOpen={show}>
                  <Alert color={alertColor}>{alertDescription}</Alert>
                </Collapse>
                <Label htmlFor="phoneNumber">
                  لطفا شماره همراه خود را وارد کنید
                </Label>
                <Control.text
                  model=".phoneNumber"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="شماره همراه"
                  className="form-control text-center mt-2 phone-number"
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
                    required: "اجباری ",
                    isNumber: "فقط اعداد ",
                    minLength: "11 رقم ",
                    maxLength: "11 رقم ",
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
                    className="form-control text-center mt-2 password"
                    validators={{
                      required,
                      isNumber,
                      minLength: minLength(4),
                      maxLength: maxLength(5),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: "اجباری ",
                      isNumber: "فقط اعداد ",
                      minLength: "حداقل 4 رقم ",
                      maxLength: "حداکثر 5 رقم ",
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
