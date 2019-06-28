import React from "react";
import { render } from "@testing-library/react";
<<<<<<< HEAD

=======
>>>>>>> Check test components
import Login from "../views/Login";
test("Login Form on Submit", () => {
  const { asFragment } = render(<Login />);
  expect(asFragment()).toMatchSnapshot();
});
