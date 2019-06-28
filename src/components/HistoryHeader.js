/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";

function HistoryHeader() {
  const headerCss = {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(245, 230, 83, 1)",
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
      <Icon name="sign out" size="large" />
    </div>
  );
}

export default HistoryHeader;
