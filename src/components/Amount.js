/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Card } from "../components/ui";

function Amount() {
  return (
    <div>
      <Card
        css={{
          maxWidth: "450px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        Total amount: S/. 150.00
      </Card>
    </div>
  );
}

export default Amount;
