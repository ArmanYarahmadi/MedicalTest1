import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/reducers";

const initialState = {};

const Store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk, logger))
);

export default Store;
