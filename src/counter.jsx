import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementAction, decrementAction } from "./store/counterReducer";
import "./counter.css";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementAction,
      decrementAction
    },
    dispatch
  );

const Counter = props => (
  <div className={"counter " + (props.counter.warning ? "warning" : "")}>
    <h1>{props.counter.value}</h1>
    <div className="controls">
      <button onClick={props.incrementAction}>+</button>
      <button onClick={props.decrementAction}>-</button>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
