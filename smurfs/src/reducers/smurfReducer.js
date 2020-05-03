import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILED,
} from "../actions/getSmurfs";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return { ...state, isFetching: true, error: "" };

    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };

    case FETCHING_SMURFS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: "There was an error",
      };
    default:
      return state;
  }
};
