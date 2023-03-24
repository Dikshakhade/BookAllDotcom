import React from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./BusBook.css";
import {
  cartCounter,
  seatSelectionReducer,
} from "../../../features/seatSelection/seatSlice";
import { useSelector, useDispatch } from "react-redux";

const BusBook = () => {
  const dispatch = useDispatch();
  const { noOfSeat, statusbus } = useSelector((state) => state.seatSelection);
  // const seat = useSelector((state) => state.seatSelection.seat);

  const busSeatData = [
    {
      name: 1,
      initialSeatStatus: false,
    },
    {
      name: 2,
      initialSeatStatus: false,
    },
    {
      name: 3,
      initialSeatStatus: false,
    },
    {
      name: 4,
      initialSeatStatus: false,
    },
    {
      name: 5,
      initialSeatStatus: false,
    },
    {
      name: 6,
      initialSeatStatus: false,
    },
    {
      name: 7,
      initialSeatStatus: false,
    },
    {
      name: 8,
      initialSeatStatus: false,
    },
    {
      name: 9,
      initialSeatStatus: false,
    },
    {
      name: 10,
      initialSeatStatus: false,
    },
    {
      name: 11,
      initialSeatStatus: false,
    },
    {
      name: 12,
      initialSeatStatus: false,
    },
    {
      name: 13,
      initialSeatStatus: false,
    },
    {
      name: 14,
      initialSeatStatus: false,
    },
    {
      name: 15,
      initialSeatStatus: false,
    },
  ];

  return (
    <>
      <ViewNoLog />
      {/* <BusBook2 /> */}
      <div className="whole-bus-div">
        <div className="bus-seat">
          {busSeatData.map((bus) => {
            return (
              <div
                className="bus-seats-divs"
                key={bus.name}
                id={`seat-no-${bus.name}`}
                style={{
                  border: statusbus[bus.name]
                    ? "4px solid green"
                    : "1px solid black",
                }}
                onClick={() => {
                  dispatch(seatSelectionReducer(bus.name));
                  dispatch(cartCounter());
                }}
              ></div>
            );
          })}
        </div>
        <div className="bus-cart">Seat Selected {noOfSeat}</div>
      </div>
    </>
  );
};

export default BusBook;
