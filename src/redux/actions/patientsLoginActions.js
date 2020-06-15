import axios from "axios";

export const alertLogin = (login) => {
  alert(JSON.stringify(login));
};

export const postPatientsLogin = (phoneNumber) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
  };
  alertLogin(data);
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
  alertLogin(data);

  return axios.post("/api/patients/createPatient/2", data);
};
