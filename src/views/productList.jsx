/** @jsx jsx */
import React from "react";
import Product from "../components/product";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const menu_items = {
  1: {
    id: 1,
    name: "Lomo Saltado",
    description: "Rico lomo saltado",
    price: 10
  },
  2: {
    id: 2,
    name: "Aji de Gallina",
    description: "Rico Aji de Gallina",
    price: 20
  },
  3: {
    id: 3,
    name: "Arroz con pollo",
    description: "Rico arroz con pollo",
    price: 15
  },
  4: {
    id: 4,
    name: "Chaufa",
    description: "Rico Chaufa",
    price: 25
  },
  5: {
    id: 5,
    name: "Caldo de Gallina",
    description: "Rico caldo de gallina",
    price: 30
  }
};

function ProductList() {
  return (
    <section>
      {Object.values(menu_items).map(value => {
        return <Product cart={value} />;
      })}
      <Link to="/order">
        <button
          css={{
            position: "fixed",
            bottom: "15px",
            left: "35%",
            padding: "10px",
            width: "30%",
            border: "2px solid white",
            color: "white",
            backgroundColor: "green",
            textAlign: "center",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ORDER
        </button>
      </Link>
    </section>
  );
}

export default ProductList;
