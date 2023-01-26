import * as types from "./types";
import axios from "axios";

// CreateReport
export const CreateReport = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_REPORT_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/reports/create",
      data
    );
    console.log(res);
    return res.data;
    // dispatch({
    //   type: types.CREATE_REPORT_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.CREATE_REPORT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// GET DOCTOR DETAILS
export const GetDoctorDetails = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_DOCTOR_REQUEST });
    const res = await axios.get(
      "https://zany-gray-clam-gear.cyclic.app/doctors"
    );
    console.log(res);
    // dispatch({
    //   type: types.GET_DOCTOR_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.GET_DOCTOR_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//ADD PATIENTS
export const AddPatients = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_PATIENT_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/patients/register",
      data
    );
    return res.data;
    // dispatch({
    //   type: types.ADD_PATIENT_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.ADD_PATIENT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//ADD BEDS
export const CreateBeds = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_BED_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/beds/add",
      data
    );
    return res.data;
    // dispatch({
    //   type: types.ADD_BED_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.ADD_BED_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//create payment
export const CreatePayment = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_PAYMENT_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/payments/add",
      data
    );
    console.log(res.data);
    // dispatch({
    //   type: types.CREATE_PAYMENT_SUCCESS,
    //   payload: {
    //
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.CREATE_PAYMENT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//GET BEDS
export const GetBeds = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_BED_REQUEST });
    const res = await axios.get("https://zany-gray-clam-gear.cyclic.app/beds");
    console.log(res);
    // dispatch({
    //   type: types.GET_BED_SUCCESS,
    //   payload: {

    //   },
    // });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.GET_BED_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//CREATE BOOKING
export const CreateBooking = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_BOOKING_REQUEST });
    const res = await axios.post(
      `https://zany-gray-clam-gear.cyclic.app/appointments/create`,
      data
    );
    console.log(res);
    // dispatch({ type: types.CREATE_BOOKING_SUCCESS, payload: res.data.postData });
  } catch (error) {
    console.log(error);
  }
};


//GET BEDS
export const AddBed = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_BEDS_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/beds/add",
      data
    );
    console.log(res);
    // dispatch({
    //   type: types.ADD_BEDS_SUCCESS,
    //   payload: {

    //   },
    // });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.ADD_BEDS_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// GET SINGLE BED
export const GetSingleBed = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_BEDS_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/beds/single",
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_SUCCESS,
    //   payload: {

    //   },
    // });
  } catch (error) {
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_ERROR,
    //   payload: {
    //     message: error,
    //   },
    // });
    console.log(error);
  }
};
// EDIT SINGLE BED

export const EditSingleBed = (data, id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_BEDS_REQUEST });
    const res = await axios.patch(
      `https://zany-gray-clam-gear.cyclic.app/beds/${id}`,
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_SUCCESS,
    //   payload: {

    //   },
    // });
  } catch (error) {
    // dispatch({
    //   type: types.GET_SINGLE_BEDS_ERROR,
    //   payload: {
    //     message: error,
    //   },
    // });
    console.log(error);
  }
};
