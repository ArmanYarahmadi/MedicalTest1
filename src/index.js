import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./assets/fonts/WebFonts/css/style.css";

const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    h6: {
      fontSize: 14,
    },
    fontFamily: ["IRANSans"],
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
