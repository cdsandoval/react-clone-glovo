import React from "react";
import { jsx } from "@emotion/core";
import Product from "../components/product";
import { useSelectorCart } from "../selector";
import { connect } from "react-redux";

function Order() {
  const cartProducts = useSelectorCart();
  console.log(cartProducts);
  return <div />;
}

export default Order;
