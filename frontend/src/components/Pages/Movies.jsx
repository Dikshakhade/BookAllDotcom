import React from "react";
import "./Movies.css";
import ViewNoLog from "../headers/ViewNoLog";
import { useState, useEffect } from "react";
import axios from "axios";
const Movies = () => {
  const [MovieData, setMovieData] = useState([]);
  useEffect(() => {
    axios
      .get("/movie")
      .then((res) => {
        console.log(res);
        setMovieData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ViewNoLog />
      {MovieData.map((movie, index) => {
        return (
          <div className="movie-div" key={index}>
            <div className="movie-parent-div">
              <div
                className="movie"
                id="movie-pic"
                style={{ backgroundImage: `url("${movie.Poster}")` }}
              ></div>
              <div className="movie" id="movie-description">
                <div className="movie-des" id="movie-name">
                  {movie.Title}
                </div>
                <div className="movie-des" id="movie-rating">
                  {movie.Rating} /10
                </div>
                <div className="movie-des" id="movie-duration">
                  Duration : {movie.Runtime}
                </div>
                <div className="movie-des" id="movie-year">
                  Year : {movie.Year}
                </div>
                <div className="movie-des" id="movie-price">
                  Price : {movie.totalPrice}
                </div>
              </div>
              <div className="movie" id="movie-bookseat">
                Book Seat
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
