import React, { useState } from "react";
import "./BackEndFormData.css";
export const MoviesFormData = () => {
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [Runtime, setRuntime] = useState("");
  const [Poster, setPoster] = useState("");
  const [totalPrice, setPrice] = useState("");

  return (
    <>
      <form className="bus-form">
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
          placeholder="Runtime"
          name="Runtime"
          value={Runtime}
          onChange={(e) => {
            setRuntime(e.target.value);
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
        <input type="submit" value="Add Bus" />
      </form>
    </>
  );
};
