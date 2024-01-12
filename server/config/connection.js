require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/codinginterviewpro",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to mongoatlas");
  })
  .catch((e) => {
    console.log("Unable to connect atlas");
    console.log(e);
  });

module.exports = mongoose.connection;
