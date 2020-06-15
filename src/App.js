import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/js/all";
import Main from "./Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import { ConfigureStore } from "./redux/configureStore";

//const store = ConfigureStore();
import store from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
