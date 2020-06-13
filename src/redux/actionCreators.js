import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const alertLogin = (login) => {
  alert(JSON.stringify(login));
};

export const postDoctorsLogin = (phoneNumber, password) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
    password: password,
  };

  return axios
    .post("/api/doctors/login", data)
    .then((res) => {
      console.log(res);
      alertLogin("خوش آمدید");
    })
    .catch((err) => {
      alertLogin(err.response.data.message);
      console.log(err);
    });
};
