import React from "react";
import { Alert } from "react-bootstrap";

function Error(errorMessage) {
  return (
    <div>
      <Alert variant="danger" style={{ fontSize: 20 }}>
        <strong>{errorMessage}</strong>
      </Alert>
    </div>
  );
}

export default Error;
