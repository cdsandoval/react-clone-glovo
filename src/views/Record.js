/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import HistoryHeader from "../components/HistoryHeader";
import HistoryList from "../components/HistoryList";

function Record() {
  return (
    <div>
      <HistoryHeader />
      <HistoryList />
    </div>
  );
}

export default Record;
