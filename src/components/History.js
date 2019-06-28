/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

<<<<<<< HEAD
function History({ restaurantName, totalPaid }) {
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

  const record = {
    zIndex: 3,
    fontSize: 15,
    margin: "3.5px",
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

      <span css={spanCss}>{restaurantName}</span>

      <span css={record}> Total: $ {totalPaid}</span>
    </div>
  );
=======
import HistoryHeader from "../components/HistoryHeader";

function History() {
  return <HistoryHeader />;
>>>>>>> Add styles to headers
}

export default History;
