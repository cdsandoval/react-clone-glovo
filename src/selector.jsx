import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useProductfromCart(id) {
  return useSelector(state => {
    if (state.cart.hasOwnProperty(id)) return state.cart[id];
    return null;
  }, shallowEqual);
}

function useSelectorCart() {
  return useSelector(state => {
    return state.cart;
  }, shallowEqual);
}

function useSelectorTotal() {
  return useSelector(state => {
    return Object.values(state.cart).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, shallowEqual);
}

function useRestaurants() {
  return useSelector(state => Object.values(state.restaurants), shallowEqual);
}

function useMenu() {
  return useSelector(state => Object.values(state.menu), shallowEqual);
}

function useUser() {
  return useSelector(state => {
    if (state.user) {
      return state.user.currentUser;
    } else {
      return null;
    }
  }, shallowEqual);
}

function useRestId() {
  return useSelector(state => {
    return state.restid;
  }, shallowEqual);
}

function useOrder() {
  return useSelector(state => {
    let name = [];

    Object.values(state.order).map(value => {
      return Object.values(state.restaurants).forEach(val => {
        if (value.restaurant_id === val.id) {
          name.push({ name: val.name, total: value.total_price });
        }
      });
    });

    return name;
  }, shallowEqual);
}

// function useLocationRestaurant(id) {
// //   return useSelector( state => {
// //     console.log(state);
// //     Object.values(state.restaurants).find(obj => obj.id === id); return obj.address)
// //   }
// //   return
// //   );
// // }

export {
  useOrder,
  useRestId,
  useProductfromCart,
  useUser,
  useRestaurants,
  useSelectorCart,
  useSelectorTotal,
  useMenu
  // useLocationLocation
};
