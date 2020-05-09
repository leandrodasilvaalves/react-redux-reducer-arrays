import React from "react";
import "./counter.css";

const Counter = props => (
  <div className={"counter " + (props.counter.warning ? "warning" : "")}>
    <h1>{props.counter.value}</h1>
    <div className="controls">
      <button onClick={props.incrementAction}>+</button>
      <button onClick={props.decrementAction}>-</button>
    </div>
  </div>
);

export default Counter;
