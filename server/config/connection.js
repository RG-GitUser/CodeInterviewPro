const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Codinginterviewpro")
  .then(() => {
    console.log("connected to mongoatlas");
  })
  .catch((e) => {
    console.log("Unable to connect to MongoDB");
    console.log(e);
  });

module.exports = mongoose.connection;
