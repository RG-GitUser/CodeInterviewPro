const path = require("path");
require("dotenv").config({ path: "../../../.env" });
const mongoose = require("mongoose");
const Questions = require("../models/Questions");
const seedData = require("./seeds.json");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/codinginterviewpro");

mongoose.connection.on("open", async () => {
  try {
    await Questions.deleteMany({});
    await Questions.insertMany(seedData);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
});
