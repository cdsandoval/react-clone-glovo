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
  listRestaurants,
  listMenu,
  postOrder,
  addRestId
} from "./action";

export function useRestId() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(addRestId(id)), [dispatch]);
}

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

export function useListMenu() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(listMenu(id)), [dispatch]);
}

export function usePostOrder() {
  const dispatch = useDispatch();
  return React.useCallback(order => dispatch(postOrder(order)), [dispatch]);
}
