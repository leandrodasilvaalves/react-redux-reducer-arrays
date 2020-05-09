import React from "react";
import "./addCounter.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCounterAction } from "./store/counterCollectionReducer";

const AddCounter = props => (
  <div className="addCounter">
    <button onClick={props.addCounterAction}>+</button>
  </div>
);

const mapdDispatchToProps = dispatch =>
  bindActionCreators({ addCounterAction }, dispatch);

export default connect(
  null,
  mapdDispatchToProps
)(AddCounter);
