/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";

function Rating({ ratingNumber }) {
  const rating = {
    fontSize: 15,
    margin: "3.5px "
  };

  return (
    <div
      css={{
        position: "relative",
        zIndex: "3",
        textAlign: "center",
        marginTop: "30px"
      }}
    >
      <span css={rating}>{ratingNumber}</span>
      <span css={rating}>
        <Icon name="star outline" size="small" />
      </span>
    </div>
  );
}

export default Rating;
