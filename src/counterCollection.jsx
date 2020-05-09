import React from "react";
import { connect } from "react-redux";
import Counter from "./counter";
import { bindActionCreators } from "redux";
import { incrementAction, decrementAction } from "./store/counterReducer";
import AddCounter from "./addCounter";

import "./counterCollection.css";

const mapStateToProps = state => ({
  counters: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementAction, decrementAction }, dispatch);

const CounterCollection = props => (
  <div className="container">
    {props.counters.map((counter, index) => (
      <Counter
        key={index}
        incrementAction={() => props.incrementAction(index)}
        decrementAction={() => props.decrementAction(index)}
        counter={counter}
      />
    ))}
    <AddCounter />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterCollection);
