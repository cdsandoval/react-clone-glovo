import React from "react";
import { render } from "@testing-library/react";

import Counter from "./counter";

test("Counter component", () => {
  const { asFragment } = render(<Counter />);
  <Counter
    handleDecrease={jest.fn()}
    handleIncrease={jest.fn()}
    quantity="0"
  />;

  expect(asFragment()).toMatchSnapshot();
});
