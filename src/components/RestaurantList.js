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
  console.log(restaurants);

  React.useEffect(() => {
    restaurants();
  }, []);

  return (
    <section css={body}>
      {listRestaurants.map(value => {
        return (
          <Restaurant
            name={value.name}
            ratingValue={value.ranking}
            id={value.id}
          />
        );
      })}
    </section>
  );
}

export default RestaurantList;
