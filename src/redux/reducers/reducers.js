import { combineReducers } from "redux";
import { Patient } from "./patient";
import { Doctor } from "./doctor";
import { Profile } from "./profile";

export default combineReducers({
  patient: Patient,
  doctor: Doctor,
  profile: Profile,
});
