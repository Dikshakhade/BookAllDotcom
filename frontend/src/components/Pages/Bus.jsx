import React, { useEffect, useState } from "react";
import "./Bus.css";
import ViewNoLog from "../headers/ViewNoLog";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Bus() {
  const navigate = useNavigate();
  const [BusData, setBusData] = useState([]);
  useEffect(() => {
    axios
      .get("/bus")
      .then((res) => {
        console.log(res);
        setBusData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const bookseatHandler = () => {
  //   navigate(`/bookbus`);
  // };
  return (
    <>
      <ViewNoLog />
      {BusData.map((bus) => {
        return (
          <div className="bus-div" key={bus._id}>
            <div className="bus-element">
              <div className="bus-name" id="bus-description">
                <div className="bus-p" id="bus-title">
                  {bus.name}
                </div>
                <div className="bus-p" id="from-to">
                  <div>From: {bus.from}</div>
                  <div>To: {bus.to}</div>
                </div>
                <div className="bus-p" id="departure-time">
                  <div className="Bus-time">Bus Time: {bus.totalTime}</div>
                  <div className="dept-div">
                    Departure Time: {bus.departureTime}
                  </div>
                </div>
              </div>
              <div className="bus-name" id="price-seat">
                <div className="price">Price: {bus.price}</div>
                <div
                  className="book-seat"
                  // onClick={bookseatHandler}
                  onClick={() => {
                    navigate(`bookbus/${bus._id}`);
                  }}
                >
                  Book Seat
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Bus;
