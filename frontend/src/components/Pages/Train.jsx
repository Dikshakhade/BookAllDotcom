import React, { useState, useEffect } from "react";
import "./Train.css";
import ViewNoLog from "../headers/ViewNoLog";
import axios from "axios";
const Train = () => {
  const [TrainData, setTrainData] = useState([]);

  useEffect(() => {
    axios
      .get("/train")
      .then((res) => {
        console.log(res);
        setTrainData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ViewNoLog />
      {TrainData.map((Train) => {
        return (
          <div className="Train-div" key={Train.TrainId}>
            <div className="Train-element">
              <div className="Train-name" id="Train-description">
                <div className="Train-p" id="Train-title">
                  {Train.name}
                </div>
                <div className="Train-p" id="from-to-train">
                  <div>From: {Train.from}</div>
                  <div>To: {Train.to}</div>
                </div>
                <div className="Train-p" id="departure-time-train">
                  <div className="Train-time">
                    Train Time: {Train.totalTime}
                  </div>
                  <div className="dept-div-train">
                    Departure Time: {Train.departureTime}
                  </div>
                </div>
              </div>
              <div className="Train-name" id="price-seat-train">
                <div className="price-train">Price: {Train.totalPrice}</div>
                <div className="book-seat-train">Book Seat</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Train;
