import React from "react";
import { render } from "@testing-library/react";

import Restaurant from "../components/Restaurant";
test("Login Form on Submit", () => {
  const { asFragment } = render(<Restaurant />);
  expect(asFragment()).toMatchSnapshot();
});
