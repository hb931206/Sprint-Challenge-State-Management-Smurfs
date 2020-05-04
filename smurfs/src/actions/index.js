import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILED = "FETCHING_SMURFS_FAILED";

export const ADDING_SMURF = "ADDING_SMURF";
export const ADDED_SMURF = "ADDED SMURF";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("Res Test", res.data);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_SMURFS_FAILED });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((data) => dispatch({ type: ADDED_SMURF }))
    .catch((err) => dispatch({ type: ADD_SMURF_FAILED }));
};
