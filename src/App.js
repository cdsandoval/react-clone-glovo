/** @jsx jsx */
import React from "react";
import Login from "./components/Login";
import { Global, jsx } from "@emotion/core";

function App() {
  return (
    <div
      css={{
        height: "100vh"
      }}
    >
      <Login />
    </div>
  );
}

export default App;
