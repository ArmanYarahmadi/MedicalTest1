import * as ActionTypes from "./ActionTypes";

export const Doctors = (
  state = { isLoading: true, errMess: null, doctors: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DOCTORS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        doctors: action.payload,
      };

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, doctors: [] };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        doctors: [],
      };

    default:
      return state;
  }
};
