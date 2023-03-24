const mongoose = require("mongoose");

const trainSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    departureTime: {
      type: String,
      required: true,
    },
    totalTime: {
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
const Train = mongoose.model("Train", trainSchema);

module.exports = Train;
