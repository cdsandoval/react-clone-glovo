/** @jsx jsx */
import React from "react";
import ProductList from "./views/productList";
import { Global, jsx } from "@emotion/core";
import Catalog from "../src/views/Catalog";
import { Router, Redirect } from "@reach/router";
import Login from "./views/Login";
<<<<<<< HEAD
import Record from "./views/Record";
=======
import Order from "./views/Order";
>>>>>>> Testing Product Component

function App() {
  return (
    <div
      css={{
        height: "100vh"
      }}
    >
      <Router>
        <Login path="/login" />
        <Catalog path="/catalog" />
        <Redirect from="/" to="/login" noThrow />
        <ProductList path="/product-list" />
        <Record path="/record" />
      </Router>
    </div>
  );
}

export default App;
