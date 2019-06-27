/** @jsx jsx */
import React from "react";
import Login from "./components/Login";
import { Global, jsx } from "@emotion/core";
import Catalog from "../src/views/Catalog";

function App() {
  return (
    <div
      css={{
        height: "100vh"
      }}
    >
      <Catalog />
      {/* reintegrar login  */}
    </div>
  );
}

export default App;
