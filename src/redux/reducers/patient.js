import * as ActionTypes from "../ActionTypes";

export const Patient = (state = { patient: {} }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PATIENT:
      return {
        ...state,
        patient: action.payload,
      };

    default:
      return state;
  }
};
