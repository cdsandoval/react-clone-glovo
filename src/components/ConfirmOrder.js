/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "../components/ui";
import { usePostOrder } from "../action-hook";
import { useRestId, useSelectorCart } from "../selector";
import { navigate } from "@reach/router";
import { useReset } from "../action-hook";

function ConfirmOrder() {
  const order = usePostOrder();
  const restid = useRestId();
  const cart = useSelectorCart();
  const reset = useReset();

  function sendOrder() {
    const data = {
      order: {
        restaurant_id: restid,
        order_items_attributes: Object.values(cart).map(value => {
          return {
            menu_item_id: value.id,
            quantity: value.quantity
          };
        })
      }
    };
    order(data);
    reset();
    navigate("/");
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
        onClick={sendOrder}
      >
        Confirm Order
      </Button>
    </div>
  );
}

export default ConfirmOrder;
