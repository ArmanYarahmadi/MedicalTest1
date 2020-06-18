import React, { Component } from "react";
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
import Header from "./HeaderComponent";

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
      alertDescription: "",
      alertColor: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
  }

  handleSubmit = (values) => {
    this.setState({
      phoneNumber: values.phoneNumber,
    });
    this.props
      .postPatientsLogin(values.phoneNumber)
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

        this.props.resetPatientsLoginForm();
      });
  };

  handleSubmitPassword = (values) => {
    this.props
      .postPatientsLoginPassword(
        this.state.phoneNumber,
        this.state.tempToken,
        values.password
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
        this.props.resetPatientsLoginPasswordForm();
      });
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
              <Form
                model="PatientsLogin"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                <Col className="col-12 col-sm-8 phoneContainer" dir="ltr">
                  <Collapse isOpen={this.state.show}>
                    <Alert color={this.state.alertColor}>
                      {this.state.alertDescription}
                    </Alert>
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
              <Collapse isOpen={this.state.isOpen}>
                <Form
                  className="mt-3"
                  model="PatientsLoginPassword"
                  onSubmit={(values) => this.handleSubmitPassword(values)}
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
}

export default PatientsLogin;
