import React from "react";
import { BusFormData } from "./BusFormData";
import { MoviesFormData } from "./MoviesFormData";
import { TrainFormData } from "./TrainFormData";

export const BackendFormData = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <BusFormData />

      <TrainFormData />

      <MoviesFormData />
    </div>
  );
};
