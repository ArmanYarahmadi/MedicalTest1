import axios from "axios";

export const postPatientsLogin = (phoneNumber) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
  };

  return axios.post("/api/patients/createPatient/1", data);
};

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
