import React from "react";

const Smurf = (props) => {
  return (
    <div className="smurf">
      <h4> Name:{props.name}</h4>
      <p>Age:{props.age}</p>
      <p>Height:{props.height}</p>
      <p>ID:{props.smurfID}</p>
    </div>
  );
};
export default Smurf;
