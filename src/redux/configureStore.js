import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialDoctorsLogin } from "./doctorsLogin";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      ...createForms({ DoctorsLogin: InitialDoctorsLogin }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
