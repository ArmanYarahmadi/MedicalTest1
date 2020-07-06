import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  Label,
  Col,
  Alert,
  Collapse,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import Cleave from "cleave.js/react";
import Header from "./HeaderComponent";

const checkisNumber = (val) => {
  if (isNaN(Number(val))) {
    return <div>فقط اعداد</div>;
  } else {
    return <></>;
  }
};

const checkRequired = (val) => {
  if (!val.length) {
    return <div>اجباری</div>;
  } else return <></>;
};

const checkMinLength = (val, len) => {
  if (!val || val.length < len) {
    return <div>حداقل {len} رقم</div>;
  } else return <></>;
};

const checkMaxLength = (val, len) => {
  if (val && val.length > len) {
    return <div>حداکثر {len} رقم</div>;
  } else return <></>;
};

class DoctorsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      phoneNumberValue: "",
      password: "",
      passwordValue: "",
      show: false,
      alertDescription: "",
      alertColor: "",
      touched: {
        phoneNumber: false,
        password: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onTouchPhoneNumber = this.onTouchPhoneNumber.bind(this);
    this.onTouchPassword = this.onTouchPassword.bind(this);
    this.PhoneErrors = this.PhoneErrors.bind(this);
    this.PasswordErrors = this.PasswordErrors.bind(this);
    this.checkIsEnabled = this.checkIsEnabled.bind(this);
  }

  checkIsEnabled = () => {
    var phoneVal = this.state.phoneNumberValue;
    var passVal = this.state.passwordValue;
    if (
      phoneVal.length === 11 &&
      !isNaN(Number(phoneVal)) &&
      passVal.length >= 8 &&
      passVal.length <= 256 &&
      !isNaN(Number(passVal))
    )
      return true;
    else return false;
  };

  PhoneErrors = () => {
    if (this.state.touched.phoneNumber === true)
      return (
        <div className="text-danger">
          {checkMaxLength(this.state.phoneNumberValue, 11)}
          {checkMinLength(this.state.phoneNumberValue, 11)}
          {checkRequired(this.state.phoneNumberValue)}
          {checkisNumber(this.state.phoneNumberValue)}
        </div>
      );
    else {
      return <></>;
    }
  };

  PasswordErrors = () => {
    if (this.state.touched.password === true)
      return (
        <div className="text-danger">
          {checkMaxLength(this.state.passwordValue, 256)}
          {checkMinLength(this.state.passwordValue, 8)}
          {checkRequired(this.state.passwordValue)}
          {checkisNumber(this.state.passwordValue)}
        </div>
      );
    else {
      return <></>;
    }
  };

  onTouchPhoneNumber = () => {
    this.setState({ touched: { phoneNumber: true } });
  };

  onTouchPassword = () => {
    this.setState({ touched: { password: true } });
  };

  onChangePhone = (event) => {
    this.setState({ phoneNumber: event.target.value });
    this.setState({ phoneNumberValue: event.target.rawValue });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
    this.setState({ passwordValue: event.target.rawValue });
  };

  handleSubmit = (event) => {
    this.props
      .postDoctorsLogin(this.state.phoneNumberValue, this.state.passwordValue)
      .then((res) => {
        this.props.addDoctor(res.data.doctor);
        this.props.addprofile(res.data.profile);
        this.setState({
          show: true,
          alertColor: "success",
          alertDescription: "خوش آمدید",
        });
        localStorage.setItem("Token", res.data.Token);
      })
      .catch((err) => {
        this.setState({
          touched: { phoneNumber: false, password: false },
          show: true,
          alertColor: "danger",
          alertDescription: err.response.data.message,
        });

        console.log(err);
      });
    this.setState({
      touched: { phoneNumber: false, password: false },
      phoneNumber: "",
      phoneNumberValue: "",
      password: "",
      passwordValue: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Header headerTitle="ورود" />
        <div className="container col-12 col-sm-6">
          <Card className="loginCard">
            <img
              src={require("../assets/images/user.png")}
              alt="user"
              className="userImg"
            />
            <CardBody className="login-body">
              <Form id="DoctorsLogin" onSubmit={this.handleSubmit}>
                <Col className="col-12 col-sm-8 phoneContainer" dir="ltr">
                  <Collapse isOpen={this.state.show}>
                    <Alert color={this.state.alertColor}>
                      {this.state.alertDescription}
                    </Alert>
                  </Collapse>
                  <Label for="phoneNumber">
                    لطفا شماره همراه خود را وارد کنید
                  </Label>
                  <Cleave
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={this.state.phoneNumber}
                    placeholder="09*********"
                    options={{
                      delimiter: "",
                      blocks: [11],
                    }}
                    onChange={this.onChangePhone}
                    onBlur={this.onTouchPhoneNumber}
                    className="form-control text-center mt-2 phone-number"
                  />
                  {this.PhoneErrors()}
                </Col>
                <Col className="col-12 col-sm-8 passwordContainer" dir="ltr">
                  <Label for="password">لطفا رمز خود را وارد نمایید</Label>
                  <Cleave
                    id="password"
                    name="password"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="رمز عبور"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    onBlur={this.onTouchPassword}
                    className="form-control text-center mt-2 phone-number"
                  />
                  {this.PasswordErrors()}
                </Col>
                <Button
                  type="submit"
                  color="primary"
                  className="login-btn"
                  disabled={!this.checkIsEnabled()}
                >
                  ورود
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
        <div>
          <Link to="/doctors/chatlist">تست ورود موفق</Link>
        </div>
      </>
    );
  }
}

export default DoctorsLogin;
