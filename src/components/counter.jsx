/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Counter({ handleDecrease, handleIncrease }) {
  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default Counter;
