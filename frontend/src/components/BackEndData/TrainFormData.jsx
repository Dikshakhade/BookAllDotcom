import React, { useState } from "react";
import "./BackEndFormData.css";
import axios from "axios";
export const TrainFormData = () => {
  const [name, setTrainName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalPrice, setPrice] = useState("");

  const trainHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/train",
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
      console.log(data);
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
        "/train",
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
      axios.delete("/train", { data: { name } }, config);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="train-form" onSubmit={trainHandler}>
        Add New Train
        <input
          type="text"
          placeholder="name"
          name="Name"
          value={name}
          onChange={(e) => {
            setTrainName(e.target.value);
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
      </form>
    </>
  );
};
