/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Restaurant from "../components/Restaurant";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function RestaurantList() {
  return (
    <div css={container}>
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
    </div>
  );
}

export default RestaurantList;
