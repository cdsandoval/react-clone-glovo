import {
  increaseQuantity,
  decreaseQuantity,
  reset,
  addCart,
  removeCart
} from "./action";

test("action - reset", () => {
  expect(reset()).toEqual({ type: "RESET" });
});

test("action - increaseQuantity", () => {
  const id = Math.round(Math.random() * 1000);
  expect(increaseQuantity(id)).toEqual({
    type: "INCREASE_PRODUCT",
    payload: {
      id
    }
  });
});

test("action - decreaseQuantity", () => {
  const id = Math.round(Math.random() * 1000);
  expect(decreaseQuantity(id)).toEqual({
    type: "DECREASE_PRODUCT",
    payload: {
      id
    }
  });
});

test("action - addCart", () => {
  const id = Math.round(Math.random() * 1000);
  expect(addCart(id)).toEqual({
    type: "ADD_PRODUCT",
    payload: {
      id,
      quantity: 1
    }
  });
});

test("action - removeCart", () => {
  const id = Math.round(Math.random() * 1000);
  expect(removeCart(id)).toEqual({
    type: "REMOVE_PRODUCT",
    payload: {
      id
    }
  });
});
