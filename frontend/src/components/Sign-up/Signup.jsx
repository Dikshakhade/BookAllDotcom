import React, { useState, useEffect } from "react";
import "./Signup.css";
import View from "../headers/View";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../Spinner";

const Signup = () => {
  const [Name, setsignupName] = useState("");
  const [Email, setsignupEmail] = useState("");
  const [Password, setsignupPassword] = useState("");
  const [Password1, setsignupPassword1] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || userData) {
      navigate("/welcome");
    }
    dispatch(reset());
  }, [userData, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (Password !== Password1) {
      toast.error("Password do not match ");
    } else {
      const userData = { Name, Email, Password };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {<View />}
      <div className="SignUp-div">
        <div className="name-email">
          Sign Up
          <form onSubmit={submitHandler}>
            <div className="signup-name">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={Name}
                onChange={(e) => {
                  setsignupName(e.target.value);
                }}
              />
            </div>
            <div className="signup-email">
              <input
                type="email"
                placeholder="E-mail"
                name="Email"
                value={Email}
                onChange={(e) => {
                  setsignupEmail(e.target.value);
                }}
              />
            </div>
            <div className="signup-password">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={Password}
                onChange={(e) => {
                  setsignupPassword(e.target.value);
                }}
              />
            </div>
            <div className="signup-password">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                value={Password1}
                onChange={(e) => {
                  setsignupPassword1(e.target.value);
                }}
              />
            </div>
            <div className="signup-submit">
              <input type="submit" value={"Sign Up"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
