import React, { useEffect, useState } from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./AllBook.css";
import {
  seatSelectionReducer,
  resetSeat,
} from "../../../features/seatSelection/seatSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import Thankyou from "../../Thankyou";

function BusBook() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [dataSeat, setdataSeat] = useState([]);
  const { noOfSeat, statusSeat } = useSelector((state) => state.seatSelection);

  const seatData = [
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
    {
      name: 16,
      initialSeatStatus: false,
    },
    {
      name: 17,
      initialSeatStatus: false,
    },
    {
      name: 18,
      initialSeatStatus: false,
    },
    {
      name: 19,
      initialSeatStatus: false,
    },
    {
      name: 20,
      initialSeatStatus: false,
    },
  ];
  useEffect(() => {
    axios
      .get(`/bus/${id}`)
      .then((res) => {
        setdataSeat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(resetSeat());
  }, []);

  const showHandler = () => {
    noOfSeat && <Thankyou />;
  };

  return (
    <>
      <ViewNoLog />
      {/* <Thankyou /> */}
      <div className="whole-seat-div">
        <div className="seat-seat">
          {seatData.map((bus) => {
            return (
              <>
                <div
                  className="seat-seats-divs"
                  key={bus.name}
                  id={`seat-no-${bus.name}`}
                  style={{
                    border: statusSeat[bus.name]
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
              </>
            );
          })}
        </div>
        <div className="seat-cart-wrap">
          <div className="seat-cart">
            <h2>Seat Selected</h2>
            <p>{noOfSeat}</p>
            <h2>Total Price</h2>
            <p>{dataSeat.totalPrice * noOfSeat}</p>
          </div>
          <div className="seat-description" key={dataSeat.name}>
            <p>Description</p>
            <p>Name: {dataSeat.name}</p>
            <p>From: {dataSeat.from}</p>
            <p>To: {dataSeat.to}</p>
            <p>Bus Time: {dataSeat.totalTime}</p>
            <p>Departure Time: {dataSeat.departureTime}</p>
          </div>
          <div className="confirm-btn" onClick={showHandler}>
            Confirm Booking
          </div>
        </div>
      </div>
    </>
  );
}
export default BusBook;
