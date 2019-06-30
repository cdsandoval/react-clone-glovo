/** @jsx jsx */
import React from "react";
import Product from "../components/product";
import { jsx } from "@emotion/core";
import { Link, Redirect } from "@reach/router";
import { useMenu, useUser } from "../selector";
import HeaderBar from "../components/HeaderBar";

function ProductList() {
  const use = useMenu();
  const user = useUser();
  if (!user.name) return <Redirect to="/login" noThrow />;

  const body = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div css={body}>
      <HeaderBar routePath="/" titleBar="Product List" />
      <section>
        {use.map(value => {
          return <Product cart={value} />;
        })}
        <Link to="/order">
          <button
            css={{
              zIndex: 3,
              position: "relative",
              fontSize: "1em",
              fontWeight: "bold",
              color: "black",
              textShadow:
                "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black",
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
    </div>
  );
}

export default ProductList;
