/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import History from "../components/History";

const history_list = {
  1: {
    user_id: 1,
    total_price: "10",
    restaurant_id: "1"
  },
  2: {
    user_id: 1,
    total_price: "10",
    restaurant_id: "1"
  },
  3: {
    user_id: 1,
    total_price: "10",
    restaurant_id: "1"
  },
  4: {
    user_id: 1,
    total_price: "10",
    restaurant_id: "1"
  },
  5: {
    user_id: 1,
    total_price: "10",
    restaurant_id: "1"
  }
};

const body = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function HistoryList() {
  return (
    <section css={body}>
      {Object.values(history_list).map(value => {
        return <History name={value.price} />;
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
