// const express = require("express");
const AsyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

//get request
const getMoviedata = AsyncHandler(async (req, res) => {
  Movie.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

const MovieDataAdd = AsyncHandler(async (req, res) => {
  const { Title, Year, Rating, Poster, totalPrice } = await req.body;
  if (!Title || !Year || !Rating || !Poster || !totalPrice) {
    res.status(400);
    throw new Error("Please fill all the feilds");
  }

  const MovieExist = await Movie.findOne({ Title });
  if (MovieExist) {
    res.status(400);
    throw new Error("Movie Already Exist");
  }
  const movie = await Movie.create({
    Title,
    Year,
    Rating,
    Poster,
    totalPrice,
  });
  if (movie) {
    res.status(201).json({
      _id: movie._id,
      Title: movie.Title,
      Rating: movie.Rating,
      Poster: movie.Poster,
      totalPrice: movie.totalPrice,
    });
  } else {
    res.status(500);
    throw new Error("Error Occured");
  }
});
module.exports = { MovieDataAdd, getMoviedata };
