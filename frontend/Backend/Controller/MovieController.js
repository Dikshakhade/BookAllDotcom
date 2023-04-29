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

//post
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

//put request

const movieUpdate = AsyncHandler(async (req, res) => {
  const { Title, Year, Rating, Poster, totalPrice } = await req.body;
  if (!Title || !Year || !Rating || !Poster || !totalPrice) {
    res.status(400);
    throw new Error("Please fill all the feilds");
  }
  const movie = Movie.findOne({ Title });
  if (movie) {
    await movie.set({
      Year: Year,
      Rating: Rating,
      Poster: Poster,
      totalPrice: totalPrice,
    });
    await movie.save();
    res.json(movie);
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
});

// delete request
const deleteMovie = AsyncHandler(async (req, res) => {
  const { Title } = await req.body;
  const movie = await Movie.findOne({ Title });
  if (movie) {
    movie.remove();
    res.json({ message: "Movie Removed " });
  } else {
    res.status(500);
    throw new Error("No Movie Found with the given Title");
  }
});

//get by id
const getMovieTitle = AsyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie) {
    res.status(201).json(movie);
  } else {
    res.status(404).json({ message: "movie Not Found " });
  }
});

module.exports = {
  MovieDataAdd,
  getMoviedata,
  movieUpdate,
  deleteMovie,
  getMovieTitle,
};
