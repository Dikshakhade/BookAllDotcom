import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function View() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">BOOKALL.COM</Link>
      </div>
      <div className="offers">
        <Link to="/offers">OFFERS</Link>
      </div>
      {/* <div className="search-bar"></div> */}
      <div className="log-in">
        <Link to="/login">LOG IN</Link>
      </div>
      <div className="sign-up">
        <Link to="/sign-up">SIGN UP</Link>
      </div>
    </div>
  );
}

export default View;
