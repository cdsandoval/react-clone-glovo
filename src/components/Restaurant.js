/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Rating from "./Rating";
<<<<<<< HEAD
import { Link } from "@reach/router";
import { useListMenu, useRestId } from "../action-hook";

function Restaurant({ name, ratingValue, id }) {
  const menu_list = useListMenu();
  const restId = useRestId();

  function menuList() {
    menu_list(id);
    restId(id);
  }

=======

function Restaurant({ name = "Norky's", rating = 5 }) {
>>>>>>> Add font icon & order components
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

  const imgcss = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1
  };

  const spancss = {
    zIndex: 3,
    fontSize: "3em",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  const ratingcss = {
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
<<<<<<< HEAD

        <span css={spanCss}>{name}</span>

        <span css={spanCss}>
          <Rating ratingNumber={ratingValue} />
        </span>
      </Link>
=======
      </a>
      <span css={spancss}>{name}</span>
      <div css={ratingcss}>
        <Rating rating={rating} />
      </div>
>>>>>>> Add font icon & order components
    </div>
  );
}

export default Restaurant;
