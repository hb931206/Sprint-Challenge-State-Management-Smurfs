import React from "react";
import { connect } from "react-redux";

const SmurfList = (props) => {
  return (
    <div>
      <div>
        {props.smurfs.map((smurf) => (
          <div className="smurfs">
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
