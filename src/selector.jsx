import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useProductfromCart(id) {
  return useSelector(state => {
    if (state.cart.hasOwnProperty(id)) return state.cart[id];
    return null;
  }, shallowEqual);
}

function useUser() {
  return useSelector(state => {
    if (state.user) {
      return Object.values(state.user);
    } else {
      return null;
    }
  }, shallowEqual);
}

function useLoading() {
  return useSelector(state => {
    if (state.user.loading) {
      return state.user.loading;
    }
    return null;
  }, shallowEqual);
}

function useError() {
  return useSelector(state => {
    if (state.user.error) {
      return state.user.error;
    }
    return null;
  }, shallowEqual);
}

export { useProductfromCart, useUser, useLoading, useError };
