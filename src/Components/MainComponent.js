import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import FormComponent from "./FormComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: this.props.gender,
      pro: this.props.pro,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={FormComponent} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
