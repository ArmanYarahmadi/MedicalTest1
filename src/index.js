import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./fonts/IRANSansWeb/css/style.css";

const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["IRAN"],
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#4dc9f4",
    },
    secondary: {
      main: "#094e66",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
