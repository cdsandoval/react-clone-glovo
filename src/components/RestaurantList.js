/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Restaurant from "../components/Restaurant";

const restaurant_list = {
  1: {
    id: 1,
    name: "Maido",
    description: "Ceviche de Lapa",
    price: 50,
    ratingNumber: 5
  },
  2: {
    id: 2,
    name: "Tanta",
    description: "Chaufa de quinua",
    price: 35,
    ratingNumber: 4
  },
  3: {
    id: 3,
    name: "Los Papachos",
    description: "Cuy chactado",
    price: 39,
    ratingNumber: 4
  },
  4: {
    id: 4,
    name: "7 Sopas",
    description: "Caldo de Gallina",
    price: 20,
    ratingNumber: 2
  },
  5: {
    id: 5,
    name: "El Hornero",
    description: "Bife",
    price: 40,
    ratingNumber: 5
  }
};

const body = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function RestaurantList() {
  return (
    <section css={body}>
      {Object.values(restaurant_list).map(value => {
        return (
          <Restaurant name={value.name} ratingValue={value.ratingNumber} />
        );
      })}
    </section>
  );
}

export default RestaurantList;
