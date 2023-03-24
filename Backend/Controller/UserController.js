const AsyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const userSignup = AsyncHandler(async (req, res) => {
  const { Name, Email, Password } = await req.body;

  const userExists = await User.findOne({ Email });
  console.log(userExists);
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    Name,
    Email,
    Password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      Name: user.Name,
      Email: user.Email,
    });
  } else {
    res.status(500);
    throw new Error("Error Occured");
  }
});
const userLogin = AsyncHandler(async (req, res) => {
  const { Email, Password } = await req.body;
  const user = await User.findOne({ Email });

  if (user && (await user.matchPassword(Password))) {
    res.json({
      _id: user._id,
      Email: user.Email,
      Name: user.Name,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});
// const loginUser = [];
module.exports = { userSignup, userLogin };
