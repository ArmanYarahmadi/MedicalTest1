import axios from "axios";
import * as ActionTypes from "../ActionTypes";

//Adding Patient from response

export const addPatient = (patient) => ({
  type: ActionTypes.ADD_PATIENT,
  payload: patient,
});

//Post 1st Request
export const postPatientsLogin = (phoneNumber) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
  };

  return axios.post("/api/patients/createPatient/1", data);
};

//Post 2nd Request
export const postPatientsLoginPassword = (phoneNumber, tempToken, password) => (
  dispatch
) => {
  const data = {
    phoneNumber: phoneNumber,
    token: tempToken,
    code: password,
  };

  return axios.post("/api/patients/createPatient/2", data);
};
