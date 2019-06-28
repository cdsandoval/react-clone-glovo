import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useProductfromCart(id) {
  return useSelector(state => {
    if (state.cart.hasOwnProperty(id)) return state.cart[id];
    return null;
  }, shallowEqual);
}

function useSelectorCart() {
  return useSelector(state => {
    return state.cart;
  }, shallowEqual);
}

function useSelectorTotal() {
  return useSelector(state => {
    return Object.values(state.cart).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, shallowEqual);
}

export { useProductfromCart, useSelectorCart, useSelectorTotal };
