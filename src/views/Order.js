/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Redirect } from "@reach/router";
import { useSelectorCart } from "../selector";
import OrderItem from "./OrderItem";
import ConfirmOrder from "../components/ConfirmOrder";
import PickUp from "../components/PickUp";
import Amount from "../components/Amount";
import { useUser } from "../selector";
import HeaderBar from "../components/HeaderBar";

function Order({
  description = "descripcion",
  name = "name",
  price = "price"
}) {
  const cartProducts = useSelectorCart();
  const user = useUser();
  if (!user.name) return <Redirect to="/login" noThrow />;

  return (
    <div>
      <HeaderBar routePath="/product-list" titleBar="Order" />

      {Object.values(cartProducts).map(product => {
        return <OrderItem {...product} />;
      })}
      <PickUp />
      <Amount />
      <ConfirmOrder />
    </div>
  );
}

export default Order;
