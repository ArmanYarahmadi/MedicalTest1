import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import FormComponent from "./FormComponent";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FormComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
