/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function History() {
  const container = {
    position: "relative",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50vh",
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
    filter: "blur(2px)"
  };

  const spanCss = {
    zIndex: 3,
    fontSize: "2em",
    color: "white",
    textShadow: "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black"
  };

  return (
    <div css={container}>
      <a href="/">
        <img
          css={imgCss}
          src="http://lorempixel.com/500/250/city/?random"
          alt="Random Restaurant"
        />
      </a>

      <span css={spanCss} />
    </div>
  );
}

export default History;
