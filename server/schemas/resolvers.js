const Question = require("../models/Questions");
const resolvers = {
  Query: {
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
