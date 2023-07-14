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

    type Query {
        games: [Game]!
        game(gameId: ID!): Game

        
    }
    `

