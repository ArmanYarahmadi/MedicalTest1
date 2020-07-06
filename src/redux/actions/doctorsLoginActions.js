import axios from "axios";
import * as ActionTypes from "../ActionTypes";

export const addProfile = (profile) => ({
  type: ActionTypes.ADD_PROFILE,
  payload: profile,
});

export const addDoctor = (doctor) => ({
  type: ActionTypes.ADD_DOCTOR,
  payload: doctor,
});

export const postDoctorsLogin = (phoneNumber, password) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
    password: password,
  };
  return axios.post("/api/doctors/login", data);
};
