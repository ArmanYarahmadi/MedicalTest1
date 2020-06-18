import React, { Component } from "react";
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
import Header from "./HeaderComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class DoctorsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      alertDescription: "",
      alertColor: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    this.props
      .postDoctorsLogin(values.phoneNumber, values.password)
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
    this.props.resetDoctorsLoginForm();
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
                model="DoctorsLogin"
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
                    className="text-danger"
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
}

export default DoctorsLogin;
