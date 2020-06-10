import * as ActionTypes from "./ActionTypes";

export const Doctors = (
  state = { isLoading: true, errMess: null, doctos: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DOCTORS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        doctos: action.payload,
      };

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, doctos: [] };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        doctos: [],
      };

    default:
      return state;
  }
};
