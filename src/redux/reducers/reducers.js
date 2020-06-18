import { combineReducers } from "redux";
import { Patient } from "./patient";
import {
  InitialPatientsLogin,
  InitialDoctorsLogin,
  InitialPatientsLoginPassword,
} from "./forms";
import { createForms } from "react-redux-form";
import { Doctor } from "./doctor";
import { Profile } from "./profile";

export default combineReducers({
  patient: Patient,
  doctor: Doctor,
  profile: Profile,
  ...createForms({
    DoctorsLogin: InitialDoctorsLogin,
    PatientsLogin: InitialPatientsLogin,
    PatientsLoginPassword: InitialPatientsLoginPassword,
  }),
});
