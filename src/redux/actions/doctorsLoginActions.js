import axios from "axios";

export const postDoctorsLogin = (phoneNumber, password) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
    password: password,
  };

  return axios.post("/api/doctors/login", data);
};
