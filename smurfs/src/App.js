import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "./actions/index";

import "./App.css";
import SmurfList from "./components/SmurfList";
import SmurfForm from "./components/SmurfForm";

function App(props) {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div>
      <h1>Smurf Village</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getSmurfs })(App);
