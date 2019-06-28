/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Rating from "./Rating";

function Restaurant({ name, ratingValue }) {
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

      <span css={spanCss}>
        <Rating ratingNumber={ratingValue} />
      </span>
    </div>
  );
}

export default Restaurant;
