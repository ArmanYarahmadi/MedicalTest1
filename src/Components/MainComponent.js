import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import FormComponent from "./FormComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./LoginComponent";
import { fetchDoctors } from "../redux/actionCreators";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    doctors: state.doctors,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDoctors: () => {
    dispatch(fetchDoctors());
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const FormPage = () => {
      return <FormComponent doctors={this.props.doctors} />;
    };

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={FormPage} />
          <Route path="/login" component={Login} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
