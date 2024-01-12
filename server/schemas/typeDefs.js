const {gql} = require('apollo-server-express')

const typeDefs = gql `
type User {
    _Id: ID!
    username: String!
    email: String!
    savedCards:[Card]
}
type Auth {
    token: ID!
    user:User
}
type Card {
    cardId: String!
    question:[String]
    answer:String!
}

input InputCard {
    cardId: String!
    question:[String]
    answer:String!
}

type Query {
    getSingleUser(id:ID!): User
}

type Mutation {
    login(email:String!, password:String!):Auth
    addUser(username:String!, email:String! password:String!):Auth
    saveCard(userId:ID!,cardData:InputCard!):User
    removeCard(userId:ID!,cardId:String!):User
    addFavoriteCard(userId:ID!, cardId: String!): User
}
`;
module.exports =typeDefs;