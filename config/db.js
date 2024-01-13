const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    //process.env.MONGO_URL
    await mongoose.connect(
      "mongodb+srv://imsuvamkr:s12345@cluster0.ntj1pkj.mongodb.net/"
    );
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
