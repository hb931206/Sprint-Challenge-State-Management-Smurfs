import React from "react";

const Smurf = (props) => {
  return (
    <div className="smurf">
      <h4>{props.name}</h4>
      <p>{props.age}</p>
      <p>{props.height}</p>
      <p>{props.smurfID}</p>
    </div>
  );
};
export default Smurf;
