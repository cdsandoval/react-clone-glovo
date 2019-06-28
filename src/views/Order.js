/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Product from "../components/product";
import { useSelectorCart } from "../selector";
import OrderItem from "./OrderItem";
import ConfirmOrder from "../components/ConfirmOrder";

function Order({
  description = "descripcion",
  name = "name",
  price = "price"
}) {
  const cartProducts = useSelectorCart();
  console.log(cartProducts);

  return (
    <div>
      {Object.values(cartProducts).map(product => {
        return <OrderItem {...product} />;
      })}
      <ConfirmOrder />
    </div>
  );
}

export default Order;
