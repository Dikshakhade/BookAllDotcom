import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        style={{
          width: "20px",
          height: "20px",
        }}
        animation="border"
      ></Spinner>
    </div>
  );
}

export default Loading;
