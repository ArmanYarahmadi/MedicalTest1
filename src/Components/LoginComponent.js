import React, { useState } from "react";
import { Card, CardText, CardBody, Button, Form } from "reactstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Login(props) {
  const [value, setValue] = useState();

  return (
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
            <Button type="submit" role="submit" className="login-btn">
              تایید
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
