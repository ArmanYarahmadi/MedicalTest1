import * as ActionTypes from "../ActionTypes";

export const Doctor = (state = { Doctor: {} }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DOCTOR:
      return {
        ...state,
        Doctor: action.payload,
      };

    default:
      return state;
  }
};
