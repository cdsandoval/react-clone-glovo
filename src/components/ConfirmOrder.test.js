import React from "react";
import { render } from "@testing-library/react";
import ConfirmOrder from "./ConfirmOrder";
test("Confirm Order Form on Submit", () => {
  const { asFragment } = render(<ConfirmOrder />);
  expect(asFragment()).toMatchSnapshot();
});
