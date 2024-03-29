const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Card {
    question: String!
    answer: String!
    cardId: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedCards: [Card]
  }

  type Auth {
    token: ID!
    user: User
  }

  input InputCard {
    cardId: String!
    question: [String]
    answer: String!
  }

  type Question {
    id: ID!
    question: String!
    answer: String!
    category: String!
  }

  type Query {
    getAllQuestions: [Question]!
    getSingleUser(id: ID!): User
    startQuiz(categories: [String!]!): QuizResponse
  }

  type Mutation {
    addQuestion(question: String!, answer: String!, category: String!): MutationResponse
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCard(userId: ID!, cardData: InputCard!): User
    removeCard(userId: ID!, cardId: String!): User
    addFavoriteCard(userId: ID!, cardId: String!): User
  }

  type MutationResponse {
    success: Boolean!
    message: String!
    question: Question
  }

  type QuizResponse {
    success: Boolean!
    message: String!
    questions: [Question]
  }
`;

module.exports = typeDefs;
