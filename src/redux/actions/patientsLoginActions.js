import axios from "axios";

export const alertLogin = (login) => {
  alert(JSON.stringify(login));
};

let tempToken = "";

export const postPatientsLogin = (phoneNumber) => (dispatch) => {
  const data = {
    phoneNumber: phoneNumber,
  };

  alertLogin(data);
  return axios
    .post("/api/patients/createPatient/1", data)
    .then((res) => {
      if (res.ok) {
        alertLogin("بیمار وجود دارد");
        localStorage.setItem("authToken", res.data.authToken);
        console.log(res.data);
      } else {
        alertLogin("بیمار باید اضافه شود");
        tempToken = res.data.token;
      }
    })
    .catch((err) => {
      alertLogin(err.response.data.message);
      console.log(err);
    });
};

export const postPatientsLoginPassword = (password) => (dispatch) => {
  const data = {
    token: tempToken,
    code: password,
  };

  alertLogin(data);

  return axios
    .post("/api/patients/createPatient/2", data)
    .then((res) => {
      alertLogin("شما با موفقیت اضافه شدید");
      localStorage.setItem("authToken", res.data.authToken);
    })
    .catch((err) => {
      alertLogin(err.response.data.message);
      console.log(err);
    });
};
