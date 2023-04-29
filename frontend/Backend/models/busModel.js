const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
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
const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
