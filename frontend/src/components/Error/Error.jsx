import React from "react";
import { Alert } from "react-bootstrap";

function Error({ variant = "info", errorMessage }) {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <p>{errorMessage}</p>
    </Alert>
  );
}

export default Error;
