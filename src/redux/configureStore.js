import { createStore, combineReducers, applyMiddleware } from "redux";
import { DOCTORS } from "../shared/doctors";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialLogin } from "./users";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      doctors: DOCTORS,
      ...createForms({ Login: InitialLogin }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
