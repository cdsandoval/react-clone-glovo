/** @jsx jsx */
import React from "react";
import Login from "./components/Login";
import { Global, jsx } from "@emotion/core";
import Catalog from "../src/views/Catalog";
import { Router } from "@reach/router";

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
      </Router>
    </div>
  );
}

export default App;
