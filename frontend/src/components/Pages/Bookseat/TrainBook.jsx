import React, { useEffect, useState } from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./AllBook.css";
import {
  seatSelectionReducer,
  resetSeat,
} from "../../../features/seatSelection/seatSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function TrainBook() {
  const navigate = useNavigate();
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
      .get(`/train/${id}`)
      .then((res) => {
        setdataSeat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(resetSeat());
  }, []);

  return (
    <>
      <ViewNoLog />
      <div className="whole-seat-div">
        <div className="seat-seat">
          {seatData.map((train) => {
            return (
              <>
                <div
                  className="seat-seats-divs"
                  key={train.name}
                  id={`seat-no-${train.name}`}
                  style={{
                    border: statusSeat[train.name]
                      ? "3px solid green"
                      : "1px solid black",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    dispatch(seatSelectionReducer(train.name));
                  }}
                >
                  {train.name}
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
          <div
            className="confirm-btn"
            onClick={() => {
              noOfSeat
                ? navigate("/bookingconfirm")
                : alert("Please select seat");
            }}
          >
            Confirm Booking
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainBook;
