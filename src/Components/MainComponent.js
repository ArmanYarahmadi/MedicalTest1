import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {
  postDoctorsLogin,
  addDoctor,
  addProfile,
} from "../redux/actions/doctorsLoginActions";
import {
  postPatientsLogin,
  postPatientsLoginPassword,
  addPatient,
} from "../redux/actions/patientsLoginActions";
import { connect } from "react-redux";
import DoctorsLogin from "./DoctorsLoginComponent";
import Biography from "./BiographyComponent";
import PatientReserve from "./PatientReserveComponent";
import PatientState from "./PatientStateComponent";
import PatientsLogin from "./PatientsLoginComponent";

const mapStateToProps = (state) => {
  return {
    patient: state.patient,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postDoctorsLogin: (phoneNumber, password) =>
    dispatch(postDoctorsLogin(phoneNumber, password)),

  postPatientsLogin: (phoneNumber) => dispatch(postPatientsLogin(phoneNumber)),

  postPatientsLoginPassword: (phoneNumber, tempToken, password) =>
    dispatch(postPatientsLoginPassword(phoneNumber, tempToken, password)),

  addPatient: (patient) => dispatch(addPatient(patient)),
  addDoctor: (doctor) => dispatch(addDoctor(doctor)),
  addProfile: (profile) => dispatch(addProfile(profile)),
});

class Main extends Component {
  render() {
    const FormPage = () => {
      return <FormComponent />;
    };

    const DoctorsLoginPage = () => {
      return (
        <DoctorsLogin
          addProfile={this.props.addProfile}
          addDoctor={this.props.addDoctor}
          resetDoctorsLoginForm={this.props.resetDoctorsLoginForm}
          postDoctorsLogin={this.props.postDoctorsLogin}
        />
      );
    };

    const PatientsLoginPage = () => {
      return (
        <PatientsLogin
          addPatient={this.props.addPatient}
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
