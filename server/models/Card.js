const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  question: [
    {
      type: String,
    },
  ],
  answer: {
    type: String,
    required: true,
  },
  //saved card id from json data
  cardId: {
    type: String,
    required: true,
  },
});

module.exports = cardSchema;
