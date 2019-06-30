/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "../components/ui";

function ConfirmOrder() {
  return (
    <div>
      <Button
        css={{
          backgroundColor: "rgba(0,168,133,1)",
          color: "white"
        }}
      >
        Confirm Order
      </Button>
    </div>
  );
}

export default ConfirmOrder;
