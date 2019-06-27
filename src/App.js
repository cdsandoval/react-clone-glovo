/** @jsx jsx */
import React from "react";
import ProductList from "./views/productList";
import { Global, jsx } from "@emotion/core";
import { Router, Link, Redirect } from "@reach/router";
import Login from "./views/Login";

function App() {
  return (
    <div
      css={{
        height: "100vh"
      }}
    >
      <Router>
        <Redirect from="/" to="/login" noThrow />
        <Login path="/login" />
        <ProductList path="/product-list" />
      </Router>
    </div>
  );
}

export default App;
