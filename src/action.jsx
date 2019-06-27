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

export { increaseQuantity, decreaseQuantity };
