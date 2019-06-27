/** @jsx jsx */
import React from "react";
import Login from "./components/Login";
import { Global, jsx } from "@emotion/core";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div
      css={{
        height: "100vh"
      }}
    >
      <Catalog /> //Reintegrar componente Login
    </div>
  );
}

export default App;
