import * as types from "./types";

const initialState = {
  loading: false,
  error: false,
  reports: [],
  beds: [],
  doctors: [],
  patients: [],
  nurses: [],
  dashboard: [],
  Appointments: [],
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_NURSE_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };
    case types.LOGIN_NURSE_SUCCESS:
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          report: payload.report,
          user: payload.user,
        },
      };
    case types.LOGIN_NURSE_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };
    default:
      return state;
  }
}
