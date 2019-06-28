function increaseQuantity(id) {
  return {
    type: "INCREASE_PRODUCT",
    payload: {
      id
    }
  };
}

function decreaseQuantity(id) {
  return {
    type: "DECREASE_PRODUCT",
    payload: {
      id
    }
  };
}

function removeCart(id) {
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      id
    }
  };
}

function reset() {
  return { type: "RESET" };
}

function addCart(product) {
  console.log(product);
  return {
    type: "ADD_PRODUCT",
    payload: {
      ...product,
      quantity: 1
    }
  };
}

export { increaseQuantity, decreaseQuantity, reset, addCart, removeCart };
