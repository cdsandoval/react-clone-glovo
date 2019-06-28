import React from "react";
import { render } from "@testing-library/react";
import PickUp from "../views/PickUp";
test("PickUp Component", () => {
  const { asFragment } = render(<PickUp />);
  expect(asFragment()).toMatchSnapshot();
});
