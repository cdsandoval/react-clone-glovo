import React from "react";
import { render } from "@testing-library/react";
import Login from "../views/Login";
test("Login Form on Submit", () => {
  const { asFragment } = render(<Login />);
  expect(asFragment()).toMatchSnapshot();
});
