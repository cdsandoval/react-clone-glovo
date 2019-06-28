/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Restaurant from "../components/Restaurant";
import { useListRestaurants } from "../action-hook";
import { useRestaurants } from "../selector";

const body = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function RestaurantList() {
  const restaurants = useListRestaurants();
  const listRestaurants = useRestaurants();

  React.useEffect(() => {
    restaurants();
    console.log(listRestaurants);
  }, []);

  return (
    <section css={body}>
      {listRestaurants.map(value => {
        return <Restaurant name={value.name} ratingValue={value.ranking} />;
      })}
    </section>
  );
}

export default RestaurantList;
