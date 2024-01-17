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

  cardId: {
    type: String,
    required: true,
  },
});

module.exports = cardSchema;
