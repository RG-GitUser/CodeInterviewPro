const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

//import schemna from cards.js

const cardSchema = require("./Card");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "must use valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    savedCards: [cardSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next(); 
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


userSchema.virtual("cardCount").get(function () {
  return this.savedCards.length;
});

const User = model("User", userSchema);

module.exports = User;
