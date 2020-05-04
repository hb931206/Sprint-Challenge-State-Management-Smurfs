import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf);
  };

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={props.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={props.age}
          onChange={handleChange}
        />
        <input
          type="text"
          place="Height"
          name="height"
          value={props.height}
          onChange={handleChange}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  smurf: state.smurf,
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
