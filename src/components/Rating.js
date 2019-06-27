/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";

function Rating({ rating = 5 }) {
  const container = { display: "flex" };

  const p = {
    margin: "0px 10px 0px 0px",
    fontSize: "27px"
  };

  return (
    <div css={container}>
      <p css={p}>{rating}</p>
      <Icon name="star outline" size="large" />
    </div>
  );
}

export default Rating;
