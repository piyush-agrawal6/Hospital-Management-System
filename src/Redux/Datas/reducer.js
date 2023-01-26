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

export default function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_BED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BED_SUCCESS:
      return {
        ...state,
        loading: false,
        beds: payload,
      };

    default:
      return state;
  }
}
