/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import GlovoLogo from "../assets/glovo386.png";

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
          <img src={GlovoLogo} alt="Glovo Logo" />

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
