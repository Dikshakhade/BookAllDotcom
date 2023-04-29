const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Year: {
      type: String,
      required: true,
    },
    Rating: {
      type: Number,
      required: true,
    },
    Poster: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
