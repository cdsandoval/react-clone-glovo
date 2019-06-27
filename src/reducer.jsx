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
    case "REMOVE_PRODUCT": {
      const updatedCart = { ...state.cart };
      delete updatedCart[action.payload.id];

      return {
        ...state,
        cart: updatedCart
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
    case "ADD_PRODUCT": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: action.payload
        }
      };
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
