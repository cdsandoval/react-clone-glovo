/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";
import { useLogout, useReset } from "../action-hook";
// import { Route, Redirect } from 'react-router'

function RestaurantHeader() {
  const logout = useLogout();

  // const reset = useReset();

  // function handleYes(){
  //   Redirect("/");
  //   reset();
  // }
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
    zIndex: 4
  };

  const h1 = {
    margin: 0
  };

  return (
    <div css={headerCss}>
      <Link to="/login" style={{ color: "white" }}>
        <Icon name="user circle outline" size="large" />
      </Link>
      <h1 css={h1}>Catalog</h1>

      <br />

      <span>
        <Link to="/login" onClick={logout}>
          <Icon fitted name="sign out" size="large" />
        </Link>
      </span>
    </div>
  );
}

export default RestaurantHeader;
