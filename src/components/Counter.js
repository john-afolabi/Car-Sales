import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../state/actionCreators";

export function Counter({ count, increment, decrement }) {
  return (
    <div>
      The count is : {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, { increment, decrement })(Counter);
