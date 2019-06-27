/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button, Card, Input } from "./ui";

function Login() {
  return (
    <div>
      <Card
        css={{
          maxWidth: "450px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <form>
          <h1
            css={{
              fontSize: "2rem",
              fontWeight: "normal",
              margin: "0"
            }}
          >
            Glovo
          </h1>

          <div
            css={{
              margin: "2rem 0"
            }}
          >
            <Input
              aria-label="Enter your e-mail"
              type="email"
              placeholder="Enter your e-mail"
              autoFocus
            />
          </div>

          <div
            css={{
              margin: "2rem 0"
            }}
          >
            <Input
              aria-label="Enter your password"
              type="password"
              placeholder="Enter your password"
              autoFocus
            />
          </div>

          <Button>Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
