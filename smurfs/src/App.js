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
      <SmurfList />
      <SmurfForm />
    </div>
  );
}
const mapStatToProps = (state) => ({});

export default connect(mapStatToProps, { getSmurfs })(App);
