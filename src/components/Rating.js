import React from "react";

function Rating({ rating = 5 }) {
  return (
    <div>
      <p>{rating}</p>
    </div>
  );
}

export default Rating;
