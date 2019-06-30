/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import HistoryHeader from "../components/HistoryHeader";
import HistoryList from "../components/HistoryList";
import { useFetchOrder } from "../action-hook";

function Record() {
  const fetchOrder = useFetchOrder();

  React.useEffect(() => {
    fetchOrder();
  });
  return (
    <div>
      <HistoryHeader />
      <HistoryList />
    </div>
  );
}

export default Record;
