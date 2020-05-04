import { FETCHING_SMURFS_SUCCESS, ADDED_SMURF } from "../actions";

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
