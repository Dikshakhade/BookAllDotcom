import React from "react";
// import axios from "axios";

export const DataBus = (props) => {
  //   console.log(props);
  console.log("no of seat", props.noOfSeat);
  if (props.busNameData.length > 0)
    return <>{props.busNameData[0].totalPrice * props.noOfSeat}</>;
};
