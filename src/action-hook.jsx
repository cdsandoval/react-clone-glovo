import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  reset,
  addCart,
  removeCart
} from "./action";

export function useAdd() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(addCart(id)), [dispatch]);
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
