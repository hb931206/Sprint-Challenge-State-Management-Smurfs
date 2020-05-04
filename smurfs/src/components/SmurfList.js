import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = (props) => {
  return (
    <div>
      <h1>Smurfs List</h1>
      <div>
        {props.smurfs.map((smurf) => (
          <div classname="smurfs">
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
});
export default connect(mapStateToProps, {})(SmurfList);
