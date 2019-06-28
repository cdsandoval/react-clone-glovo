/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";

function RestaurantHeader() {
  const headerCss = {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",

    listStyle: "none",
    background: "rgba(245, 230, 83, 1)",
    padding: 30,
    width: "100%",
    fontWeight: "bold",
    marginBottom: "30px",
    zIndex: 4
  };

  return (
    <div css={headerCss}>
      <Link to="/login">
        <Icon name="user circle outline" size="large" />
      </Link>

      <br />

      <span>
        <Icon fitted name="sign out" size="large" />
      </span>
    </div>
  );
}

export default RestaurantHeader;
