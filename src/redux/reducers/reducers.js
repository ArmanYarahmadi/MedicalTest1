import { combineReducers } from "redux";
import { InitialPatientsLogin } from "./patientsLogin";
import { InitialPatientsLoginPassword } from "./PatientsLoginPassword";
import { InitialDoctorsLogin } from "./doctorsLogin";
import { createForms } from "react-redux-form";

export default combineReducers({
  ...createForms({
    DoctorsLogin: InitialDoctorsLogin,
    PatientsLogin: InitialPatientsLogin,
    PatientsLoginPassword: InitialPatientsLoginPassword,
  }),
});
