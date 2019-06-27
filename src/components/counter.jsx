/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Counter({ handleDecrease, handleIncrease, quantity }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px"
      }}
    >
      <button
        onClick={handleDecrease}
        css={{
          border: "2px solid black",
          backgroundColor: "red",
          padding: "5px 10px",
          color: "white",
          cursor: "pointer"
        }}
      >
        -
      </button>
      <span
        css={{ padding: "5px 10px", fontSize: "1.3em", fontFamily: "Arial" }}
      >
        {quantity}
      </span>
      <button
        onClick={handleIncrease}
        css={{
          border: "2px solid black",
          backgroundColor: "green",
          padding: "5px 10px",
          color: "white",
          cursos: "pointer"
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
