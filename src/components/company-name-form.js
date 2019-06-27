/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button, Card, Input } from "./ui";

function Login() {
  return (
    <Card css={{ maxWidth: "450px" }}>
      <form>
        <h1
          css={{
            fontSize: "2rem",
            fontWeight: "normal",
            margin: "0"
          }}
        >
          Company Name
        </h1>
        <div
          css={{
            margin: "2rem 0"
          }}
        >
          <Input
            aria-label="Enter your company name"
            type="text"
            placeholder="ACME Inc."
            autoFocus
          />
        </div>
        <Button>Set company name</Button>
      </form>
    </Card>
  );
}

export default Login;
