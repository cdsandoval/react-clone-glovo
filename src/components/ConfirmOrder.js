/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "../components/ui";
import { usePostOrder } from "../action-hook";

function ConfirmOrder() {
  const order = usePostOrder();

  function sendOrder() {
    const data = {
      restaurant_id: 1,
      order_items_attributes: 2
    };

    order(data);
  }
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
      <button onClick={sendOrder}>AQUI</button>
    </div>
  );
}

export default ConfirmOrder;
