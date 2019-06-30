/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";
import { useLogout } from "../action-hook";

function HistoryHeader() {
  const logout = useLogout();

  const headerCss = {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgb(255,210,0)",
    padding: 20,
    width: "100%",
    fontWeight: "bold",
    marginBottom: "30px",
    zIndex: 2
  };

  const h1 = {
    margin: 0
  };

  return (
    <div css={headerCss}>
      <Link to="/" style={{ color: "white" }}>
        <Icon name="arrow alternate circle left outline" size="large" />
      </Link>
      <h1 css={h1}>Record</h1>
      <Link to="/login" onClick={logout} css={{ color: "white" }}>
        <Icon name="sign out" size="large" />
      </Link>
    </div>
  );
}

export default HistoryHeader;
