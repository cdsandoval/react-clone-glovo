/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantList from "../components/RestaurantList";

function Catalog() {
  return (
    <div>
      <RestaurantHeader />
      <RestaurantList />
    </div>
  );
}

export default Catalog;
