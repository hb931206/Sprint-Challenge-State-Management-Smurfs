import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILED,
  ADDING_SMURF,
  ADDED_SMURF,
  ADD_SMURF_FAILED,
} from "../actions";

const initialState = {
  smurf: { name: "", age: "", height: "" },

  smurfs: [],
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };

    default:
      return state;
  }
};
