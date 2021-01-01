import * as types from "../types";

var initialState;
initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false,
      };
    case types.REGISTERING:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: false,
        isLoading: false,
      };
    case types.LOGOUT:
      return { ...state, user: {}, isLoggedIn: false, isLoading: false };
    case types.LOADING_USER:
      return { ...state, isLoading: true };
    case types.NO_LOADING_USER:
      return { ...state, isLoading: false };
    case types.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          medias: action.payload,
        },
        isLoggedIn: true,
        isLoading: false,
      };
    case types.UPDATE_PASSWORD:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
