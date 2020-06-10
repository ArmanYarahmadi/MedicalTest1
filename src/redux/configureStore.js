import { createStore, combineReducers, applyMiddleware } from "redux";
import { DOCTORS } from "../shared/doctors";

import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      doctors: DOCTORS,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
