const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/Database");
const userSignup = require("./routes/signupRoute");
const userLogin = require("./routes/loginRoute");
const busInfo = require("./routes/busRoute");
const TrainData = require("./routes/trainRoute");
const MovieData = require("./routes/movieRoute");
// const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();
connectDB();
// app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/", busInfo);
app.use("/", MovieData);
app.use("/", TrainData);
app.use("/", userLogin);
app.use("/", userSignup);

app.listen(PORT, console.log(`Running on port ${PORT}`));
