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
} from "reactstrap";
import Header from "./HeaderComponent";
import Cleave from "cleave.js/react";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class PatientsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      show: false,
      tempToken: "",
      phoneNumber: "",
      phoneNumberValue: "",
      password: "",
      passwordValue: "",
      alertDescription: "",
      alertColor: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangePhone = (event) => {
    this.setState({ phoneNumber: event.target.value });
    this.setState({ phoneNumberValue: event.target.rawValue });
    console.log(this.state.phoneNumber);
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
    this.setState({ passwordValue: event.target.rawValue });
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
          show: true,
          alertDescription:
            "شماره همراه وارد شده معتبر نمی باشد لطفا مجددا تلاش کنید",
          alertColor: "danger",
        });

        this.setState({
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
      })
      .catch((err) => {
        this.setState({
          show: true,
          alertDescription: " کد وارد شده معتبر نمی باشد لطفا مجددا تلاش کنید",
          alertColor: "danger",
        });

        console.log(err);
        this.setState({
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
                  <Cleave
                    id="phoneNumber"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    options={{
                      prefix: "09",
                      delimiter: " ",
                      blocks: [4, 3, 4],
                    }}
                    onChange={this.onChangePhone}
                    className="form-control text-center mt-2 phone-number"
                  />
                </Col>
                <Button type="submit" color="primary" className="login-btn">
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
                    <Cleave
                      id="password"
                      name="password"
                      value={this.state.password}
                      options={{
                        prefix: "",
                        delimiter: " ",
                        blocks: [1, 1, 1, 1],
                      }}
                      onChange={this.onChangePassword}
                      className="form-control text-center mt-2 phone-number"
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
}

export default PatientsLogin;
