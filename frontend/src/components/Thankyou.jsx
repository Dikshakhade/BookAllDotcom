import React from "react";
import "../components/WhatBooking/Booking.css";
import { useNavigate } from "react-router-dom";
import ViewNoLog from "./headers/ViewNoLog";

function Thankyou() {
  const navigate = useNavigate();
  return (
    <>
      <ViewNoLog />
      <div className="booking-div">
        <p>ThankYou For Booking !!!</p>
        <button
          onClick={() => {
            navigate("/welcome");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default Thankyou;
