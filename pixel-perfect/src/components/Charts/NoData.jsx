import React from "react";
import "./NoData.css";

export default function NoData({ message = "No data available" }) {
  return (
    <div className="no-data">
      <p>{message}</p>
    </div>
  );
}
