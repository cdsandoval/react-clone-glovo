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

  const container = {
    position: "relative",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40vh",
    height: "140px",
    boxSizing: "border - box",
    padding: 12,
    borderRadius: 8,
    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    margin: "20px 0"
  };

  const spanCss = {
    zIndex: 3,
    position: "relative",
    fontSize: "1em",
    fontWeight: "bold",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  const imgCss = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    filter: "blur(1px)"
  };

  return (
    <div css={container}>
      <div />
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "10px"
        }}
      >
        <img
          css={imgCss}
          src="http://lorempixel.com/500/250/food/?random"
          alt="Random Food"
        />
        <span css={spanCss}>{cart.name}</span>
        <span css={spanCss}>S/. {cart.price}</span>
        <p css={spanCss}>{cart.description}</p>
      </div>

      <Counter
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        quantity={quantity}
      />
    </div>
  );
}

export default Product;
