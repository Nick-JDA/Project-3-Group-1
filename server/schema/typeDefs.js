const { gql } = require("apollo-server-express");
const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        password: String!
        gameCart: [Game]
    }
    type Game {
        _id: ID!
        name: String!
        img: String!
        description: String!
        type: Float!
        reviews: [Review]
    }
    type Review {
        _id: ID!
        text: String!
        ratings: [Rating]
    }
    type Rating {
        _id: ID!
        value: Int!
    }
    type Auth {
        token: String!
        user: User
      }
    input gameInput {
        name: String!
        img: String!
        description: String!
      }
    input reviewInput {
        text: String!
      }
    input ratingInput {
        value: Int!
      }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveGame(input: gameInput!): User
        removeGame(gameId: ID!): User
        createReview(input: reviewInput!): Game
        createRating(input: ratingInput!): Review
      }
    `;


module.exports = typeDefs;