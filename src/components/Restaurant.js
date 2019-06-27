/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Restaurant() {
  const container = {
    position: "relative",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50vh",
    height: "150px",
    boxSizing: "border - box",
    padding: 12,
    borderRadius: 8,
    boxShadow: "0px 5px 9px rgba(0, 0, 0, 0.2)",
    textDecoration: "none",
    overflow: "hidden",
    "&:after": {
      top: "0",
      left: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(0deg, rgba(1,0,23,0.7189250700280112) 4%, rgba(0,0,0,0) 75%)",
      "z-index": 2
    }
  };

  const imgcss = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1
  };

  const spancss = {
    zIndex: 3,
    fontSize: "5em",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  return (
    <div css={container}>
      <a href="/">
        <img
          css={imgcss}
          src="http://lorempixel.com/500/250/food/?random"
          alt="Random Food"
        />
      </a>
      <span css={spancss}>Norky's</span>
    </div>
  );
}

export default Restaurant;
