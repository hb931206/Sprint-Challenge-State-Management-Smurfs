import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILED,
} from "../actions/index";

const initialState = [{ name: "Brainey", age: "200", height: "5cm", id: 0 }];

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return { ...state };
    case FETCHING_SMURFS_SUCCESS:
      return {};
    default:
      return state;
  }
};
