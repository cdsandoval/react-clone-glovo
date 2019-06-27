/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import {
  useIncreaseQuantity,
  useDecreaseQuantity,
  useRemoveCart,
  useAdd
} from "../action-hook";
import { useProductfromCart } from "../selector";
import Counter from "./counter";

function Product({ cart }) {
  const removeCart = useRemoveCart();
  const Add = useAdd();
  const increaseQuantity = useIncreaseQuantity();
  const decreaseQuantity = useDecreaseQuantity();
  const product = useProductfromCart(cart.id);
  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    product && setQuantity(product.quantity);
  }, [product]);

  function handleIncrease() {
    if (product === null) {
      Add(cart);
    } else {
      increaseQuantity(cart.id);
    }
  }

  function handleDecrease() {
    if (product !== null) {
      if (product.quantity === 1) {
        removeCart(cart.id);
        setQuantity(0);
      } else {
        decreaseQuantity(cart.id);
      }
    }
  }

  return (
    <div
      css={{
        borderRadius: "15px",
        backgroundColor: "#eee",
        padding: "10px",
        margin: "15px 0",
        fontFamily: "Arial",
        boxShadow: "3px 3px 7px 0px rgba(0,0,0,1)"
      }}
    >
      <div />
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px"
        }}
      >
        <span css={{ fontSize: "1.2em", fontWeight: "bold" }}>{cart.name}</span>
        <span css={{ fontSize: "1.1em" }}>S/. {cart.price}</span>
      </div>

      <p>{cart.description}</p>
      <Counter
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        quantity={quantity}
      />
    </div>
  );
}

export default Product;
