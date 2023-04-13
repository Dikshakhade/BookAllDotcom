import React, { useState } from "react";
import "./BackEndFormData.css";
import axios from "axios";
import Error from "../Error/Error";

export const MoviesFormData = () => {
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [Rating, setRating] = useState("");
  const [Poster, setPoster] = useState("");
  const [totalPrice, setPrice] = useState("");
  const [error, seterror] = useState("");
  const movieHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/movie",
        {
          Title,
          Year,
          Rating,
          Poster,
          totalPrice,
        },
        config
      );
      console.log(data);
    } catch (error) {
      seterror(error);
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
        "/movie",
        { Title, Year, Rating, Poster, totalPrice },
        config
      );
    } catch (error) {
      seterror(error);
    }
  };

  const deleteHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios.delete("/movie", { data: { Title } }, config);
    } catch (error) {
      seterror(error);
    }
  };

  return (
    <>
      {error && <Error errorMessage={error} />}
      <form className="bus-form" onSubmit={movieHandler}>
        Add New Movie
        <input
          type="text"
          placeholder="Title"
          name="Title"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Year"
          name="Year"
          value={Year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Rating"
          name="Rating"
          value={Rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Poster"
          name="Poster"
          value={Poster}
          onChange={(e) => {
            setPoster(e.target.value);
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
        <input type="submit" value="Add Movie" />
        <input type="button" value="Update" onClick={updateHandler} />
        <input type="button" value="Delete" onClick={deleteHandler} />
      </form>
    </>
  );
};
