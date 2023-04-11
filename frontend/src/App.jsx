import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import Welcome from "./components/Home/Welcome";
import { Login } from "./components/Login/Login";
import Bus from "./components/Pages/Bus";
import Signup from "./components/Sign-up/Signup";
import Train from "./components/Pages/Train";
import Movies from "./components/Pages/Movies";
import { BackendFormData } from "./components/BackEndData/BackendFormData";
import BusBook from "./components/Pages/Bookseat/BusBook";
import { Provider } from "react-redux";
import store from "./app/store";
import TrainBook from "./components/Pages/Bookseat/TrainBook";
import Thankyou from "./components/Thankyou";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<Signup />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/Bus" element={<Bus />}></Route>
            <Route path="/Train" element={<Train />}></Route>
            <Route path="/Movies" element={<Movies />}></Route>
            <Route path="/offers" element={<BackendFormData />}></Route>
            <Route path="/bus/bookbus/:id" exact element={<BusBook />}></Route>
            <Route
              path="/train/booktrain/:id"
              exact
              element={<TrainBook />}
            ></Route>
            <Route path="/bookingconfirm" element={<Thankyou />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
