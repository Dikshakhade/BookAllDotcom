const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
};
module.exports = connectDb;
