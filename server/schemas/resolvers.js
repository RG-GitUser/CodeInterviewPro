const Question = require("../models/Questions");
const { User, Card } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    async getSingleUser(_, { id }) {
      return await User.findById(id).populate("savedcards");
    },
    getAllQuestions: async () => {
      try {
        const questions = await Question.find();
        return questions;
      } catch (error) {
        throw new Error("Error fetching questions");
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("invalid credential");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveCard: async (_, { userId, cardData }) => {
      return await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { saveCards: cardData } },
        { new: true, runValidators: true }
      );
    },
    addFavoriteCard: async (_, { userId, cardId }) => {
      const card = await Card.findById(cardId);
      return await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { favoriteCards: card } },
        { new: true, runValidators: true }
      );
    },
    removeCard: async (_, { userId, cardId }) => {
      return await User.findByIdAndUpdate(
        { _id: userId },
        { $pull: { saveCards: { _id: cardId } } },
        { new: true }
      );
    },
    addQuestion: async (_, { question, answer, category }) => {
      try {
        if (
          ![
            "MongoDB",
            "Express",
            "React",
            "Node",
            "JavaScript Fundamentals",
            "RESTful API",
            "GraphQL",
          ].includes(category)
        ) {
          throw new Error("Invalid category");
        }

        const newQuestion = new Question({ question, answer, category });
        await newQuestion.save();
        return {
          success: true,
          message: "Question added successfully!",
          question: newQuestion,
        };
      } catch (error) {
        return {
          success: false,
          message: `Error adding question: ${error.message}`,
          question: null,
        };
      }
    },
  },
};

module.exports = resolvers;
