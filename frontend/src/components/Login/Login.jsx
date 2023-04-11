import React, { useEffect, useState } from "react";
import "./Login.css";
import View from "../headers/View";
import Error from "../Error/Error";
import { reset, login } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (isError) {
      setError(message);
      console.log(message);
    }
    if (isSuccess || userData) {
      navigate("/welcome");
    }
    dispatch(reset());
  }, [userData, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { Email, Password };
    dispatch(login(userData));
  };

  return (
    <>
      {<View />}
      {isLoading && <Loading />}
      {error && <Error variant="danger" errorMessage={error} />}

      <div className="Login-div">
        <div className="username-password">
          Log In
          <form onSubmit={submitHandler}>
            <div className="UserName">
              <label style={{ color: "Black" }}>
                <input
                  type={"email"}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username/Email"
                />
              </label>
            </div>
            <div className="Password">
              <label style={{ color: "Black" }}>
                <input
                  type={"password"}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="Submit">
              <label style={{ color: "Black" }}>
                <input
                  type="submit"
                  value={"Log In"}
                  // onClick={setLoginData}
                ></input>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
