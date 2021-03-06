import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  Label,
  Col,
  Collapse,
  Alert,
  Form,
  Input,
} from "reactstrap";
import Header from "./HeaderComponent";
import { withRouter } from "react-router-dom";

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

class PatientsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      show: false,
      tempToken: "",
      phoneNumberValue: "",
      passwordValue: "",
      alertDescription: "",
      alertColor: "",
      touched: {
        phoneNumber: false,
        password: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onTouchPhoneNumber = this.onTouchPhoneNumber.bind(this);
    this.onTouchPassword = this.onTouchPassword.bind(this);
    this.PhoneErrors = this.PhoneErrors.bind(this);
    this.PasswordErrors = this.PasswordErrors.bind(this);
    this.checkIsEnabled = this.checkIsEnabled.bind(this);
    this.checkPhoneEnabled = this.checkPhoneEnabled.bind(this);
  }

  checkPhoneEnabled = () => {
    var phoneVal = this.state.phoneNumberValue;
    if (phoneVal.length === 11 && !isNaN(Number(phoneVal))) return true;
    else return false;
  };

  checkIsEnabled = () => {
    var phoneVal = this.state.phoneNumberValue;
    var passVal = this.state.passwordValue;
    if (
      phoneVal.length === 11 &&
      !isNaN(Number(phoneVal)) &&
      passVal.length === 4 &&
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
          {checkMaxLength(this.state.passwordValue, 4)}
          {checkMinLength(this.state.passwordValue, 4)}
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
    const { value, maxLength } = event.target;
    const message = value.slice(0, maxLength);

    this.setState({ phoneNumberValue: message });
  };

  onChangePassword = (event) => {
    const { value, maxLength } = event.target;
    const message = value.slice(0, maxLength);

    this.setState({ passwordValue: message });
  };

  handleSubmit = (event) => {
    this.props
      .postPatientsLogin(this.state.phoneNumberValue)
      .then((res) => {
        this.setState({
          isOpen: true,
          show: true,
          alertDescription: "تایید تلفن همراه",
          alertColor: "success",
          tempToken: res.data.token,
        });
      })
      .catch((err) => {
        this.setState({
          touched: { phoneNumber: false, password: false },
          show: true,
          alertDescription:
            "شماره همراه وارد شده معتبر نمی باشد لطفا مجددا تلاش کنید",
          alertColor: "danger",
        });

        this.setState({
          touched: { phoneNumber: false, password: false },
          phoneNumber: "",
          phoneNumberValue: "",
        });
      });
    event.preventDefault();
  };

  handleSubmitPassword = (event) => {
    this.props
      .postPatientsLoginPassword(
        this.state.phoneNumberValue,
        this.state.tempToken,
        this.state.passwordValue
      )
      .then((res) => {
        localStorage.setItem("authToken", res.data.authToken);
        this.props.addPatient(res.data.patient);
        this.props.history.push(`/doctors/${this.props.doctorId}/state`);
      })
      .catch((err) => {
        this.setState({
          touched: { phoneNumber: false, password: false },
          show: true,
          alertDescription: " کد وارد شده معتبر نمی باشد لطفا مجددا تلاش کنید",
          alertColor: "danger",
        });

        console.log(err);
        this.setState({
          touched: { phoneNumber: false, password: false },
          password: "",
          passwordValue: "",
        });
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
              <Form id="PatientsLogin" onSubmit={this.handleSubmit}>
                <Col className="col-12 col-sm-8 phoneContainer" dir="ltr">
                  <Collapse isOpen={this.state.show}>
                    <Alert color={this.state.alertColor}>
                      {this.state.alertDescription}
                    </Alert>
                  </Collapse>
                  <Label for="phoneNumber">
                    لطفا شماره همراه خود را وارد کنید
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="09*********"
                    value={this.state.phoneNumberValue}
                    maxLength="11"
                    onBlur={this.onTouchPhoneNumber}
                    onChange={this.onChangePhone}
                    className="form-control text-center mt-2 phone-number"
                  />
                  {this.PhoneErrors()}
                </Col>
                <Button
                  type="submit"
                  color="primary"
                  className="login-btn"
                  disabled={!this.checkPhoneEnabled()}
                >
                  تایید
                </Button>
              </Form>
              <Collapse isOpen={this.state.isOpen}>
                <Form
                  className="mt-3"
                  model="PatientsLoginPassword"
                  onSubmit={this.handleSubmitPassword}
                >
                  <Label for="password">لطفا رمز ارسال شده را وارد کنید</Label>
                  <Col className="col-12 col-sm-8 passwordContainer" dir="ltr">
                    <Input
                      id="password"
                      name="password"
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={this.state.passwordValue}
                      placeholder="رمز عبور"
                      maxLength="4"
                      onBlur={this.onTouchPassword}
                      onChange={this.onChangePassword}
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
              </Collapse>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default withRouter(PatientsLogin);
