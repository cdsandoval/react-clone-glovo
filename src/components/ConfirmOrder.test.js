import React from "react";
import { render } from "@testing-library/react";
import ConfirmOrder from "../views/ConfirmOrder";
test("Confirm Order Form on Submit", () => {
  const { asFragment } = render(<ConfirmOrder />);
  expect(asFragment()).toMatchSnapshot();
});
