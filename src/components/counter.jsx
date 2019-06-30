/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";

function Counter({ handleDecrease, handleIncrease, quantity }) {
  return (
    <div>
      <button
        aria-label="Increase Quantity"
        onClick={handleDecrease}
        css={{ all: "revert" }}
      >
        <Icon name="minus square" size="big" />
      </button>
      <span>{quantity}</span>
      <button aria-label="Decrease Quantity" onClick={handleIncrease}>
        <Icon name="add square" size="big" />
      </button>
    </div>
  );
}

export default Counter;
