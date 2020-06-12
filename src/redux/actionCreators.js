import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const alertLogin = (login) => {
  alert("Current state is:" + JSON.stringify(login));
};

export const postDoctorsLogin = (phoneNumber, password) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
    password: password,
  };

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-origin": "*",
  };

  return axios
    .post(`${baseUrl}api/doctors/login`, data, { headers: headers })
    .then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
};
