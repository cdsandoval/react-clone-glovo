/** @jsx jsx */
import React from "react";
import Product from "../components/product";
import { jsx } from "@emotion/core";
import { Link, Redirect } from "@reach/router";
import { useMenu, useUser } from "../selector";

function ProductList() {
  const use = useMenu();
  const user = useUser();
  if (!user.name) return <Redirect to="/login" noThrow />;

  return (
    <section>
      {use.map(value => {
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
