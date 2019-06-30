import { combineReducers } from "redux";

const initialState = {
  cart: {},
  user: { currentUser: {} },
  restaurants: {},
  menu: {},
  order: {},
  restaurant_id: ""
};

function cartReducer(state = initialState.cart, action = {}) {
  switch (action.type) {
    case "INCREASE_PRODUCT": {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          quantity: state[action.payload.id].quantity + 1
        }
      };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = { ...state };
      delete updatedCart[action.payload.id];
      return updatedCart;
    }
    case "DECREASE_PRODUCT": {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          quantity: state[action.payload.id].quantity - 1
        }
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case "RESET": {
      return {};
    }
    default: {
      return state;
    }
  }
}

function userReducer(state = initialState.user, action = {}) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        currentUser: action.payload
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        currentUser: {}
      };
    }
    default: {
      return state;
    }
  }
}

function restaurantsReducer(state = initialState.restaurants, action = {}) {
  switch (action.type) {
    case "LIST_RESTAURANTS": {
      return action.payload;
    }

    case "SELECT_RESTAURANT": {
      console.log(state);
      return {
        ...state,
        restaurant: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

function menuReducer(state = initialState.menu, action) {
  switch (action.type) {
    case "LIST_MENU": {
      return action.payload.menu_items;
    }
    default: {
      return state;
    }
  }
}

function orderReducer(state = initialState.order, action) {
  switch (action.type) {
    case "ORDER": {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

function restIdReducer(state = initialState.restaurant_id, action) {
  switch (action.type) {
    case "ADD_REST_ID": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  restaurants: restaurantsReducer,
  menu: menuReducer,
  order: orderReducer,
  restid: restIdReducer
});

export default reducer;
