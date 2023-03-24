import React from "react";
import ViewNoLog from "../headers/ViewNoLog";
import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <ViewNoLog />
      <div className="services-div">
        <div className="services">
          <Link to="/bus" className="service ">
            <div id="Bus"></div>{" "}
          </Link>
          <Link to="/train" className="service ">
            <div id="Train"></div>
          </Link>
          <Link to="/movies" className="service ">
            <div id="Movies"></div>
          </Link>
          <Link to="/concerts" className="service ">
            <div id="Concerts"></div>
          </Link>
          <Link to="/flights" className="service ">
            <div id="Flights"></div>
          </Link>
          <Link to="hotels" className="service ">
            <div id="Hotels"></div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
