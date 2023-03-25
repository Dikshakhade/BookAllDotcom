import React, { useEffect, useState } from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./BusBook.css";
import { seatSelectionReducer } from "../../../features/seatSelection/seatSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { DataBus } from "./DataBus";

const BusBook = (props) => {
  const dispatch = useDispatch();
  const { noOfSeat, statusbus } = useSelector((state) => state.seatSelection);
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
  const [busdataseat, setBusDataSeat] = useState(0);
  useEffect(() => {
    axios
      .get("/bus")
      .then((res) => {
        setBusDataSeat(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                    ? "2px solid green"
                    : "1px solid black",
                  textAlign: "center",
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
          price {<DataBus busNameData={busdataseat} noOfSeat={noOfSeat} />}
        </div>
      </div>
    </>
  );
};

export default BusBook;
