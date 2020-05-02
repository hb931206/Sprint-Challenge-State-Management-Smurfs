import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const SmurfList = (state) => {
  console.log("Testing my state", state);
  return (
    <div>
      <h2>Smurf List</h2>
      {state.state.map((smurf) => {
        return (
          <Smurf
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
            smurfID={smurf.id}
          />
        );
      })}
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log(state);
  return { state };
};

export default connect(mapStatetoProps, {})(SmurfList);
