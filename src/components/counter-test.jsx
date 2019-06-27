import React from "react";
import { render } from "@testing-library/react";

import Counter from "./counter";

test("Counter component", () => {
  const { asFragment } = render(<Counter />);
});
