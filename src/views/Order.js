/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Product from "../components/product";
import { useSelectorCart } from "../selector";
import OrderItem from "./OrderItem";

function Order({
  description = "descripcion",
  name = "name",
  price = "price"
}) {
  const cartProducts = useSelectorCart();
  console.log(cartProducts);
  return (
    <div>
      {Object.values(cartProducts).map(value => {
        return (
          <OrderItem
            name={value.name}
            price={value.price}
            description={value.description}
          />
        );
      })}
    </div>
  );
}

export default Order;
