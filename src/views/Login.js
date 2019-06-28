/** @jsx jsx */
import { jsx } from "@emotion/core";
import GlovoLogo from "../assets/glovo386.png";
import { navigate } from "@reach/router";
import { Button, Card, Input } from "../components/ui";
import { useUser } from "../selector";
import { useLogin } from "../action-hook";
import React from "react";

function Login() {
  const login = useLogin();
  const [email, setEmail] = React.useState("josh@delivery.pe");
  const [password, setPassword] = React.useState("123456");
  const user = useUser();

  React.useEffect(() => {
    if (user.name) {
      navigate("/");
    }
  }, [user]);

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    login({ email, password });
  }

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
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={changeEmail}
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
              value={password}
              onChange={changePassword}
            />
          </div>

          <Button>Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
