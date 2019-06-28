/** @jsx jsx */
import { jsx } from "@emotion/core";

function OrderItem({ name, price, description, quantity }) {
  return (
    <div
      css={{
        borderRadius: "15px",
        backgroundColor: "#eee",
        padding: "10px",
        margin: "15px 0",
        fontFamily: "Arial",
        boxShadow: "3px 3px 7px 0px rgba(0,0,0,1)"
      }}
    >
      <div />
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px"
        }}
      >
        <span css={{ fontSize: "1.2em", fontWeight: "bold" }}>{name}</span>
        <span css={{ fontSize: "1.1em" }}>S/.{price}</span>
        <span css={{ fontSize: "1.1em" }}>Quantity:{quantity}</span>
      </div>

      <p>{description}</p>
    </div>
  );
}

export default OrderItem;
