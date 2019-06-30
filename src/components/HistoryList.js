/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import History from "../components/History";
import { useOrder } from "../selector";

const history_list = {
  1: {
    user_id: 1,
    total_price: "504.01",
    total_products: 1,
    restaurant_id: "1",
    restaurant_name: "Maido"
  },
  2: {
    user_id: 1,
    total_price: "302.23",
    total_products: 4,
    restaurant_id: "1",
    restaurant_name: "Tanta"
  },
  3: {
    user_id: 1,
    total_price: "345.90",
    total_products: 11,
    restaurant_id: "1",
    restaurant_name: "Los Papachos"
  },
  4: {
    user_id: 1,
    total_price: "104.50",
    total_products: 12,
    restaurant_id: "1",
    restaurant_name: "7 Sopas"
  },
  5: {
    user_id: 1,
    total_price: "551.00",
    total_products: 13,
    restaurant_id: "1",
    restaurant_name: "El Honero"
  }
};

const body = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function HistoryList() {
  const order = useOrder();
  return (
    <section css={body}>
      {order.map(value => {
        return <History restaurantName={value.name} totalPaid={value.total} />;
      })}
    </section>
  );
}

export default HistoryList;

// create_table "orders", force: :cascade do |t|
//     t.bigint "user_id"
//     t.integer "total_price"
//     t.bigint "restaurant_id"
//     t.datetime "created_at", null: false
//     t.datetime "updated_at", null: false
//     t.boolean "complete", default: false
//     t.index ["restaurant_id"], name: "index_orders_on_restaurant_id"
//     t.index ["user_id"], name: "index_orders_on_user_id"
//   end
