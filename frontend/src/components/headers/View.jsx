import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function View() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">BOOKALL</Link>
      </div>
      <div className="add">
        <Link to="/add">ADD</Link>
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
