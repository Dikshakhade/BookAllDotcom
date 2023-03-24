// const express = require("express");
const AsyncHandler = require("express-async-handler");
const Train = require("../models/trainModel");

//get request
const getTrainData = AsyncHandler(async (req, res) => {
  Train.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
const TrainDataAdd = AsyncHandler(async (req, res) => {
  const { name, from, to, departureTime, totalTime, totalPrice } =
    await req.body;
  if (!name || !from || !to || !departureTime || !totalTime || !totalPrice) {
    res.status(400);
    throw new Error("Please fill all the feilds");
  }

  const TrainExist = await Train.findOne({ name });
  if (TrainExist) {
    res.status(400);
    throw new Error("Train Already Exist");
  }
  const train = await Train.create({
    name,
    from,
    to,
    departureTime,
    totalTime,
    totalPrice,
  });
  if (train) {
    res.status(201).json({
      _id: train._id,
      name: train.name,
      from: train.from,
      to: train.to,
      departureTime: train.departureTime,
      totalTime: train.totalTime,
      totalPrice: train.totalPrice,
    });
  } else {
    res.status(500);
    throw new Error("Error Occured");
  }
});
module.exports = { TrainDataAdd, getTrainData };
