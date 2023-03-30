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

//post request
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

//put request
const updateTraindata = AsyncHandler(async (req, res) => {
  const { name, from, to, departureTime, totalTime, totalPrice } =
    await req.body;
  const train = await Train.findOne({ name });
  if (train) {
    await train.set({
      from: from,
      to: to,
      departureTime: departureTime,
      totalTime: totalTime,
      totalPrice: totalPrice,
    });
    await train.save();
    res.json(train);
  } else {
    res.status(404);
    throw new Error("Train not found");
  }
});
//delete
const deleteTraindata = AsyncHandler(async (req, res) => {
  const { name } = await req.body;
  const train = await Train.findOne({ name });
  if (train) {
    train.remove();
    res.json({ message: "Train Removed " });
  } else {
    res.status(500);
    throw new Error("No Train Found with the given name");
  }
});

//get Train by Id
const getTrainbyId = AsyncHandler(async (req, res) => {
  const train = await Train.findById(req.params.id);
  if (train) {
    res.status(201).json(train);
  } else {
    res.status(404).json({ message: "train Not Found " });
  }
});

module.exports = {
  TrainDataAdd,
  getTrainData,
  updateTraindata,
  deleteTraindata,
  getTrainbyId,
};
