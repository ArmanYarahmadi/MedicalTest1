import React, { Component } from "react";
import FormComponent from "./HomePageComponents/FormComponent/FormComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { postDoctorsLogin } from "../redux/actions/doctorsLoginActions";
import {
  postPatientsLogin,
  postPatientsLoginPassword,
} from "../redux/actions/patientsLoginActions";
import { actions } from "react-redux-form";
import { connect } from "react-redux";
import DoctorsLogin from "./DoctorComponents/DoctorsLoginComponent/DoctorsLoginComponent";
import Biography from "./PatientComponents/BiographyComponent/BiographyComponent";
import PatientReserve from "./PatientComponents/PatientReserveComponent/PatientReserveComponent";
import PatientState from "./PatientComponents/PatientStateComponent/PatientStateComponent";
import PatientsLogin from "./PatientComponents/PatientsLoginComponent/PatientsLoginComponent";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  postDoctorsLogin: (phoneNumber, password) =>
    dispatch(postDoctorsLogin(phoneNumber, password)),

  postPatientsLogin: (phoneNumber) => dispatch(postPatientsLogin(phoneNumber)),

  postPatientsLoginPassword: (password, tempToken) =>
    dispatch(postPatientsLoginPassword(password, tempToken)),

  resetPatientsLoginPasswordForm: () => {
    dispatch(actions.reset("PatientsLoginPassword"));
  },

  resetDoctorsLoginForm: () => {
    dispatch(actions.reset("DoctorsLogin"));
  },

  resetPatientsLoginForm: () => {
    dispatch(actions.reset("PatientsLogin"));
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

    const PatientsLoginPage = () => {
      return (
        <PatientsLogin
          resetPatientsLoginPasswordForm={
            this.props.resetPatientsLoginPasswordForm
          }
          postPatientsLoginPassword={this.props.postPatientsLoginPassword}
          resetPatientsLoginForm={this.props.resetPatientsLoginForm}
          postPatientsLogin={this.props.postPatientsLogin}
        />
      );
    };

    const DoctorBioPage = ({ match }) => {
      return <Biography doctorId={parseInt(match.params.doctorId, 10)} />;
    };

    const PatientReservePage = ({ match }) => {
      return <PatientReserve doctorId={parseInt(match.params.doctorId, 10)} />;
    };

    const PatientStatePage = ({ match }) => {
      return <PatientState doctorId={parseInt(match.params.doctorId, 10)} />;
    };

    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={FormPage} />
          <Route path="/doctorslogin" exact component={DoctorsLoginPage} />
          <Route path="/patientslogin" exact component={PatientsLoginPage} />
          <Route
            path="/doctors/:doctorId/bio"
            exact
            component={DoctorBioPage}
          />
          <Route
            path="/doctors/:doctorId/reserve"
            exact
            component={PatientReservePage}
          />
          <Route
            path="/doctors/:doctorId/state"
            exact
            component={PatientStatePage}
          />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
