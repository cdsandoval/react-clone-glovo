import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "./action";

export function useIncreaseQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(increaseQuantity(id)), [dispatch]);
}

export function useDecreaseQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(decreaseQuantity(id)), [dispatch]);
}
