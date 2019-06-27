import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating = 5 }) {
  return (
    <div>
      <p>{rating}</p>
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
}

export default Rating;
