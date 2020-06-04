import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Salam</div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
