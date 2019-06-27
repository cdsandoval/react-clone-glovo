const initialState = {
  cart: {}
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "INCREASE_PRODUCT": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            ...state.cart[action.payload.id],
            quantity: state.cart[action.payload.id].quantity + 1
          }
        }
      };
    }
    case "DECREASE_PRODUCT": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            ...state.cart[action.payload.id],
            quantity: state.cart[action.payload.id].quantity - 1
          }
        }
      };
    }
  }
}
