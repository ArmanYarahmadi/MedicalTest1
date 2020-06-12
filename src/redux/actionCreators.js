import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const alertLogin = (login) => {
  alert("Current state is:" + JSON.stringify(login));
};

export const postDoctorsLogin = (phoneNumber, password) => (dispatch) => {
  return axios
    .post(`${baseUrl}api/doctors/login`, { phoneNumber, password })
    .then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
};
