import React from "react";
import { render } from "@testing-library/react";

import Rating from "./Rating";

test("Login Form on Submit", () => {
  const { asFragment } = render(<Rating ratingNumber={5} />);
  expect(asFragment()).toMatchSnapshot();
});
