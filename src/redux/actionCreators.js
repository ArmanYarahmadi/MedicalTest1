import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});

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
    .then((doctors) => dispatch(adddoctors(doctors)))
    .catch((error) => dispatch(doctorsFailed(error.message)));
};

export const doctorsLoading = () => ({
  type: ActionTypes.DOCTORS_LOADING,
});

export const doctorsFailed = (errmess) => ({
  type: ActionTypes.DOCTORS_FAILED,
  payload: errmess,
});

export const adddoctors = (doctors) => ({
  type: ActionTypes.ADD_DOCTORS,
  payload: doctors,
});
