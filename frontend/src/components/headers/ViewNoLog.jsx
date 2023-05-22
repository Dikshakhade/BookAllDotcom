import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, logout } from "../../features/auth/authSlice";
import "./navbar.css";

function ViewNoLog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">BOOKALL</Link>
      </div>
      <div className="add">
        <Link to="/add">ADD</Link>
      </div>
      {/* <div className="search-bar"></div> */}
      <div className="log-in" style={{ top: "80%" }}>
        Welcome
        <br />
        {userData.Name}
      </div>
      <div className="log-out">
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(logout());
            dispatch(reset());
            navigate("/");
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
}
export default ViewNoLog;
