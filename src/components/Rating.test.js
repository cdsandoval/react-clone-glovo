import React from "react";
import { render } from "@testing-library/react";

import Rating from "../components/Rating";

test("Login Form on Submit", () => {
  const { asFragment } = render(<Rating />);
  expect(asFragment()).toMatchSnapshot();
});
