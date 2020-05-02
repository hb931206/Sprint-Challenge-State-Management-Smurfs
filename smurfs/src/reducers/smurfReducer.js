import { FETCHING_SMURFS_SUCCESS } from "../actions/index";

const initialState = [{ name: "Brainey", age: "200", height: "5cm", id: 0 }];

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};
