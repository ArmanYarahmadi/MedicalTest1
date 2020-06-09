import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Login(props) {
  const [value, setValue] = useState();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
            <Form>
              <CardText>لطفا شماره همراه خود را وارد کنید</CardText>
              <div className="col-12 col-sm-8 phoneContainer" dir="ltr">
                <PhoneInput
                  dir="ltr"
                  value={value}
                  onChange={setValue}
                  className="phone-number"
                />
              </div>
              <Button className="login-btn" onClick={toggle}>
                تایید
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="loginModal">
        <ModalHeader toggle={toggle}>تایید شماره همراه</ModalHeader>
        <ModalBody dir="rtl" className="text-center">
          <Form>
            <Label>لطفا کد ارسال شده را وارد کنید</Label>
            <Input className="password col-6 col-sm-3" />
            <Button color="primary" onClick={toggle} className="login-btn">
              ورود
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default Login;
