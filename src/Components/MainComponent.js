import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import FormComponent from "./FormComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { postDoctorsLogin } from "../redux/actionCreators";
import { actions } from "react-redux-form";
import { connect } from "react-redux";
import DoctorsLogin from "./DoctorsLoginComponent";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  postDoctorsLogin: (phoneNumber, password) =>
    dispatch(postDoctorsLogin(phoneNumber, password)),

  resetDoctorsLoginForm: () => {
    dispatch(actions.reset("DoctorsLogin"));
  },
});

class Main extends Component {
  render() {
    const FormPage = () => {
      return <FormComponent />;
    };

    const DoctorsLoginPage = () => {
      return (
        <DoctorsLogin
          resetDoctorsLoginForm={this.props.resetDoctorsLoginForm}
          postDoctorsLogin={this.props.postDoctorsLogin}
        />
      );
    };

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={FormPage} />
          <Route path="/login" component={DoctorsLoginPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
