import React from "react";
import Restaurant from "../components/Restaurant";
import RestaurantHeader from "../components/RestaurantHeader";

function Catalog() {
  return (
    <div>
      <RestaurantHeader />
      <Restaurant />
    </div>
  );
}

export default Catalog;
