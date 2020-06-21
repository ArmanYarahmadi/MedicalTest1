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
import Cleave from "cleave.js/react";
import Header from "./HeaderComponent";

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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
          show: true,
          alertColor: "danger",
          alertDescription: err.response.data.message,
        });

        console.log(err);
      });
    this.setState({
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
                    options={{
                      prefix: "09",
                      delimiter: "",
                      blocks: [11],
                    }}
                    onChange={this.onChangePhone}
                    className="form-control text-center mt-2 phone-number"
                  />
                  <div className="text-danger">
                    {checkMaxLength(this.state.phoneNumberValue, 11)}
                    {checkMinLength(this.state.phoneNumberValue, 11)}
                    {checkRequired(this.state.phoneNumberValue)}
                  </div>
                </Col>
                <Col className="col-12 col-sm-8 passwordContainer" dir="ltr">
                  <Label for="password">لطفا رمز خود را وارد نمایید</Label>
                  <Cleave
                    id="password"
                    name="password"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    className="form-control text-center mt-2 phone-number"
                  />
                  <div className="text-danger">
                    {checkMaxLength(this.state.passwordValue, 256)}
                    {checkMinLength(this.state.passwordValue, 8)}
                    {checkRequired(this.state.passwordValue)}
                  </div>
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
}

export default DoctorsLogin;
