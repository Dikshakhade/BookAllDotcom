import axios from "axios";
import React, { useState } from "react";
import "./BackEndFormData.css";

export const BusFormData = () => {
  const [name, setBusName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalPrice, setPrice] = useState("");

  const busHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.post(
        "https://bookalldotcom.onrender.com/bus",
        {
          name,
          from,
          to,
          departureTime,
          totalTime,
          totalPrice,
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.put(
        "/bus",
        { name, from, to, departureTime, totalTime, totalPrice },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios.delete("/bus", { data: { name } }, config);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="bus-form" onSubmit={busHandler}>
        Add New Bus
        <input
          type="text"
          placeholder="name"
          name="Name"
          value={name}
          onChange={(e) => {
            setBusName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="from"
          name="from"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="to"
          name="to"
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="departure time"
          name="departureTime"
          value={departureTime}
          onChange={(e) => {
            setDepartureTime(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="total time"
          name="totalTime"
          value={totalTime}
          onChange={(e) => {
            setTotalTime(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="total Price"
          name="totalPrice"
          value={totalPrice}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input type="submit" value="Add Bus" />
        <input type="button" value="Update" onClick={updateHandler} />
        <input type="button" value="Delete" onClick={deleteHandler} />
        {/* <button onClick={updateHandler}>Update</button> */}
      </form>
    </div>
  );
};
