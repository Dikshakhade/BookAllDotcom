import React from "react";
import Spinner from "react-bootstrap";

function Loading() {
  return (
    <Spinner
      style={{
        height: "50%",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></Spinner>
  );
}

export default Loading;
