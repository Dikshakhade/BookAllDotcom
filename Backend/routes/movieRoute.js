const express = require("express");
const router = express.Router();
const {
  MovieDataAdd,
  getMoviedata,
  movieUpdate,
  deleteMovie,
  getMovieTitle,
} = require("../Controller/MovieController");
// const MovieData = [
//   {
//     Title: "The Lion King",
//     Year: "2019",
//     Rating: 8.5,
//     Runtime: "118 min",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
//   },
//   {
//     Title: "Mowgli: Legend of the Jungle",
//     Year: "2018",
//     Rating: 8.5,
//     Runtime: "104 min",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
//   },
//   {
//     Title: "Doctor Strange",
//     Year: "2016",
//     Rating: 8.5,
//     Runtime: "115 min",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
//   },
//   {
//     Title: "John Wick",
//     Year: "2014",
//     Rating: 8.5,
//     Runtime: "101 min",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
//   },
//   {
//     Title: "The Notebook",
//     Year: "2004",
//     Rating: 8.5,
//     Runtime: "123 min",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
//   },
// ];

router.route("/movie").post(MovieDataAdd);
router.route("/movie").get(getMoviedata).put(movieUpdate).delete(deleteMovie);
router.route("/movie/:id").get(getMovieTitle);

module.exports = router;
