const initialState = [{ name: "Brainey", age: "200", height: "5cm", id: 0 }];

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCHING_SMURF_SUCCESS:
    //   return {};
    default:
      return state;
  }
};
