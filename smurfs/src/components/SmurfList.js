import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/getSmurfs";

const SmurfList = (getSmurfs, smurfs, isFetching) => {
  if (isFetching) {
    return <h2> Coming with the village</h2>;
  } else {
    return (
      <div>
        <h1> Our Village</h1>
        <div>
          {smurfs.map((smurf) => (
            <p>{smurf.name}</p>
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
  };
};
export default connect(mapStateToProps, { getSmurfs })(SmurfList);
