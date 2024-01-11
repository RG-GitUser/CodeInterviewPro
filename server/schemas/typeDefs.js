const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Question {
    id: ID!
    question: String!
    answer: String!
    category: String!
  }

  type Query {
    getAllQuestions: [Question]!
  }

  type Mutation {
    addQuestion(
      question: String!
      answer: String!
      category: String!
    ): MutationResponse
  }

  type MutationResponse {
    success: Boolean!
    message: String!
    question: Question
  }
`;
module.exports = typeDefs;
