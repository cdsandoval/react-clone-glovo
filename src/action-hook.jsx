import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  reset,
  addCart,
  removeCart,
  login,
  logout,
  listRestaurants
} from "./action";

export function useLogin() {
  const dispatch = useDispatch();
  return React.useCallback(user => dispatch(login(user)), [dispatch]);
}

export function useLogout() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(logout()), [dispatch]);
}

export function useAdd() {
  const dispatch = useDispatch();
  return React.useCallback(product => dispatch(addCart(product)), [dispatch]);
}

export function useIncreaseQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(increaseQuantity(id)), [dispatch]);
}

export function useDecreaseQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(decreaseQuantity(id)), [dispatch]);
}

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useRemoveCart() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(removeCart(id)), [dispatch]);
}

export function useListRestaurants() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(listRestaurants()), [dispatch]);
}
