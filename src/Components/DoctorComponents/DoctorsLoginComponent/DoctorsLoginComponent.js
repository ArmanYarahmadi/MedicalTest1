import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Label,
  Col,
  Alert,
  Collapse,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import Header from "../../Headers/HomeHeader/HeaderComponent";
import "./styles.css";

function DoctorsLogin(props) {
  const [show, setShow] = useState(false);
  const [alertDescription, setAlertDescription] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));

  const handleSubmit = (values) => {
    props
      .postDoctorsLogin(values.phoneNumber, values.password)
      .then((res) => {
        console.log(res);
        setShow(true);
        setAlertColor("success");
        setAlertDescription("خوش آمدید");
        localStorage.setItem("Token", res.data.Token);
      })
      .catch((err) => {
        setAlertDescription(err.response.data.message);
        setShow(true);
        setAlertColor("danger");
        console.log(err);
      });
    props.resetDoctorsLoginForm();
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
              model="DoctorsLogin"
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
                  className="alert-danger"
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
              <Col className="col-12 col-sm-8 passwordContainer" dir="ltr">
                <Label htmlFor="password">لطفا رمز خود را وارد نمایید</Label>
                <Control
                  type="password"
                  model=".password"
                  id="password "
                  name="password"
                  placeholder="رمز عبور"
                  className="form-control text-center mt-2 password"
                  validators={{
                    required,
                    isNumber,
                    minLength: minLength(8),
                    maxLength: maxLength(256),
                  }}
                />
                <Errors
                  className="alert-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: "اجباری ",
                    isNumber: "فقط اعداد ",
                    minLength: "حداقل 8 رقم ",
                    maxLength: "حداکثر 256 رقم",
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
    </>
  );
}

export default DoctorsLogin;
