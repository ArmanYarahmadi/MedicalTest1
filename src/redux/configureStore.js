import { createStore, combineReducers } from "redux";
import DOCTORS from "../shared/doctors";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      doctors: DOCTORS,
    })
  );

  return store;
};
