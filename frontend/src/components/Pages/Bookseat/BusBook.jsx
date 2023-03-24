import React from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./BusBook.css";
import {
  seatSatus,
  seatSelectionReducer,
} from "../../../features/seatSelection/seatSlice";
import { useSelector, useDispatch } from "react-redux";

const BusBook = () => {
  const dispatch = useDispatch();
  const { seat, seatSelect, statusbus } = useSelector(
    (state) => state.seatSelection
  );
  // const seat = useSelector((state) => state.seatSelection.seat);

  const busSeatData = [
    {
      name: 0,
      initialSeatStatus: false,
    },
    {
      name: 1,
      initialSeatStatus: 0,
    },
    {
      name: 2,
      initialSeatStatus: 0,
    },
    {
      name: 3,
      initialSeatStatus: 0,
    },
    {
      name: 4,
      initialSeatStatus: 0,
    },
    {
      name: 5,
      initialSeatStatus: 0,
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
                    ? "2px solid green"
                    : "1px solid black",
                }}
                onClick={() => {
                  dispatch(seatSelectionReducer(bus.name));
                  dispatch(seatSatus(bus.initialSeatStatus));
                }}
              ></div>
            );
          })}
        </div>
        <div className="bus-cart">
          No. of Seat selected {seat.length}
          {seatSelect.map((busitem) => {
            return <div>{busitem.name}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default BusBook;
