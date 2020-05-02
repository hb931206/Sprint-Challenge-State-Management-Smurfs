import axios from "axios";

export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";

export const getSmurfs = () => (dispatch) => {
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data.name });
    })
    .catch((err) => {
      console.log(err);
    });
};
