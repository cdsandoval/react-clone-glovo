/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Restaurant() {
  const container = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space - between",
    width: 200,
    height: 100,
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

  return (
    <div css={container}>
      <p>dlk</p>
    </div>
  );
}

export default Restaurant;
