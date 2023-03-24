import React, { useEffect, useState } from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./BusBook.css";
import { seatSelectionReducer } from "../../../features/seatSelection/seatSlice";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

const BusBook = () => {
  const dispatch = useDispatch();
  const [busDataSeat, setBusDataSeat] = useState();
  const { noOfSeat, statusbus } = useSelector((state) => state.seatSelection);
  // const seat = useSelector((state) => state.seatSelection.seat);
  const hello = async () => {
    await axios
      .get("/bus")
      .then((res) => {
        console.log(res);
        setBusDataSeat(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    hello();
  }, []);
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
                }}
              >
                {bus.name}
              </div>
            );
          })}
        </div>
        <div className="bus-cart">
          Seat Selected {noOfSeat} <br />
          price {busDataSeat[0].totalPrice}
        </div>
      </div>
    </>
  );
};

export default BusBook;
