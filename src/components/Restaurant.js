/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Rating from "./Rating";
import { Link } from "@reach/router";
import { useListMenu, useRestId } from "../action-hook";

function Restaurant({ name, ratingValue, id }) {
  const menu_list = useListMenu();
  const restId = useRestId();

  function menuList() {
    menu_list(id);
    restId(id);
  }

  const container = {
    position: "relative",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40vh",
    height: "120px",
    boxSizing: "border - box",
    padding: 12,
    borderRadius: 8,
    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    marginBottom: "25px"
  };

  const imgCss = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    filter: "blur(1px)"
  };

  const spanCss = {
    zIndex: 3,
    position: "relative",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  const imgCss = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    filter: "blur(2px)"
  };

  const spanCss = {
    zIndex: 3,
    fontSize: "1.5em",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  return (
    <div css={container}>
      <Link to="/product-list" onClick={menuList}>
        <img
          css={imgCss}
          src="http://lorempixel.com/500/250/food/?random"
          alt="Random Food"
        />

        <span css={spanCss}>{name}</span>

        <span css={spanCss}>
          <Rating ratingNumber={ratingValue} />
        </span>
      </Link>
    </div>
  );
}

export default Restaurant;
