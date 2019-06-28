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

function useRestaurants() {
  return useSelector(state => Object.values(state.restaurants), shallowEqual);
}

function useUser() {
  return useSelector(state => {
    if (state.user) {
      return state.user.currentUser;
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

export {
  useProductfromCart,
  useUser,
  useLoading,
  useError,
  useRestaurants,
  useSelectorCart,
  useSelectorTotal
};
