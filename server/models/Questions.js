const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "JavaScript Fundamentals",
      "RESTful API",
      "GraphQL",
    ],
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
