/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Rating from "./Rating";

function Restaurant({ name = "Norky's", rating = 5 }) {
  const container = {
    position: "relative",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50vh",
    height: "150px",
    boxSizing: "border - box",
    padding: 12,
    borderRadius: 8,
    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    marginBottom: "15px"
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
    fontSize: "3em",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  const ratingCss = {
    zIndex: 3,
    fontSize: "1.5em",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  return (
    <div css={container}>
      <a href="/">
        <img
          css={imgCss}
          src="http://lorempixel.com/500/250/food/?random"
          alt="Random Food"
        />
      </a>

      <span css={spanCss}>{name}</span>

      <div css={ratingCss}>
        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default Restaurant;
