import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import FormComponent from "./FormComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./LoginComponent";
import { fetchDoctors, postLogin } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    doctors: state.doctors,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postLogin: (phoneNum, password) => dispatch(postLogin(phoneNum, password)),

  resetLoginForm: () => {
    dispatch(actions.reset("login"));
  },

  fetchDoctors: () => {
    dispatch(fetchDoctors());
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDoctors();
  }

  render() {
    const FormPage = () => {
      return <FormComponent doctors={this.props.doctors} />;
    };

    console.log(this.props.doctors);

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={FormPage} />
          <Route
            path="/login"
            component={() => (
              <Login
                resetLoginForm={this.props.resetLoginForm}
                postLogin={this.props.postLogin}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
