/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
<<<<<<< HEAD
import { Redirect } from "@reach/router";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantList from "../components/RestaurantList";
import { useUser } from "../selector";
=======

import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantList from "../components/RestaurantList";
>>>>>>> Add header & Basic component

function Catalog() {
  const user = useUser();
  if (!user.name) return <Redirect to="/login" noThrow />;
  return (
    <div>
      <RestaurantHeader />
      <RestaurantList />
    </div>
  );
}

export default Catalog;
