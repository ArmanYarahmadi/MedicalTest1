import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const postLogin = (phoneNum, password) => (dispatch) => {
  const newLogin = {
    phoneNum: phoneNum,
    password: password,
  };

  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newLogin),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      console.log("post feedback", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};

//fetch doctors
export const fetchDoctors = () => (dispatch) => {
  dispatch(doctorsLoading(true));

  return fetch(baseUrl + "doctors")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((doctors) => dispatch(addDoctors(doctors)))
    .catch((error) => dispatch(doctorsFailed(error.message)));
};

export const doctorsLoading = () => ({
  type: ActionTypes.DOCTORS_LOADING,
});

export const doctorsFailed = (errmess) => ({
  type: ActionTypes.DOCTORS_FAILED,
  payload: errmess,
});

export const addDoctors = (doctors) => ({
  type: ActionTypes.ADD_DOCTORS,
  payload: doctors,
});
