import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./App";

const middlewares = [];
const mockStore = configureStore(middlewares);

it("renders without crashing", () => {
  const initialState = {
    cart: {},
    user: {
      currentUser: {}
    },
    restaurants: {},
    menu: {},
    order: {},
    restaurant_id: ""
  };
  const store = mockStore(initialState);

  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
