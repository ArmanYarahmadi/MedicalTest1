import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Main from "./Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

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

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div>
            <Main />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
