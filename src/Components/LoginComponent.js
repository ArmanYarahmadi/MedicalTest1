import React, { useState } from "react";
import { Card, CardText, CardBody, Button } from "reactstrap";
import { Control, Form, LocalForm, Errors } from "react-redux-form";

function Login(props) {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (values) => {
    alert("Current State is: " + JSON.stringify(values));
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
            <LocalForm
              model="login"
              onSubmit={(values) => handleSubmit(values)}
            >
              <CardText>لطفا شماره همراه خود را وارد کنید</CardText>
              <div className="col-12 col-sm-8 phoneContainer" dir="ltr">
                <Control.text
                  model=".phoneNum"
                  id="phoneNum"
                  name="phoneNum"
                  placeholder="شماره تلفن همراه"
                  className="form-control text-center"
                  validators={{
                    required,
                    isNumber,
                    minLength: minLength(11),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".phoneNum"
                  show="touched"
                  messages={{
                    required: "لطفا شماره تلفن خود را وارد کنید* ",
                    isNumber: "لطفا فقط از اعداد استفاده کنید* ",
                    minLength: "حداقل دارای 11 عدد* ",
                    maxLength: "حداکثر دارای 15 عدد* ",
                  }}
                />
              </div>
              <div className="col-12 col-sm-8 phoneContainer" dir="ltr">
                <CardText>لطفا رمز خود را وارد نمایید</CardText>
                <Control.text
                  model=".password"
                  id="password"
                  name="password"
                  placeholder="رمز عبور"
                  className="form-control text-center mt-2"
                  validators={{
                    required,
                    isNumber,
                    minLength: minLength(8),
                    maxLength: maxLength(15),
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
              </div>
              <Button
                type="submit"
                color="primary"
                className="login-btn"
                onClick={toggle}
              >
                ورود
              </Button>
            </LocalForm>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Login;
