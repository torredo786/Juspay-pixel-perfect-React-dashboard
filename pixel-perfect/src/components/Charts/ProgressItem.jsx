import React from "react";
import "./WorldMap.css"


const ProgressItem = ({ label, value, percent }) => {
  return (
    <div style={{ width: "100%", marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span className="revenue" style={{ fontSize: "12px", fontWeight: "400" }}>{label}</span>
        <span className="revenue" style={{ fontSize: "12px", fontWeight: "400" }}>{value}</span>
      </div>

      <div
        style={{
          width: "100%",
          height: "2px",
          borderRadius: "2px",
          backgroundColor: "#FFFFFF66",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            borderRadius: "80px",
            backgroundColor: "#A8C5DA",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressItem;
