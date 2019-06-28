/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Button } from "../components/ui";

function ConfirmOrder() {
  return (
    <div>
      <Button
        css={{
          backgroundColor: "rgba(255,210,0,1)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255,210,0,0.9)",
            color: "white"
          }
        }}
      >
        Confirm Order
      </Button>
    </div>
  );
}

export default ConfirmOrder;
