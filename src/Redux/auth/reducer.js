import * as types from "./types";

// const TOKEN = localStorage.getItem("token");
const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  userLogout: { message: "" },
  data: {
    // isAuthenticated: !!TOKEN,
    // token: TOKEN,
    user: null,
    report: [],
  },
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };
    case types.LOGIN_USER_SUCCESS:
      // localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          // isAuthenticated: payload.token ? true : false,
          // token: payload.token,
          report: payload.report,
          user: payload.user,
        },
      };
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };

    case "AUTH_LOGIN_RESET":
      return {
        ...state,
        userLogin: { loading: false, error: false, message: "" },
      };
    case types.AUTH_LOGOUT:
      // localStorage.removeItem("token");
      return {
        ...state,
        userLogout: { message: "Logout Successfully" },
        data: {
          isAuthenticated: false,
          // token: null,
          user: null,
        },
      };
    default:
      return state;
  }
}
