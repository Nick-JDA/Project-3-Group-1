const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        email: STRING!
        passowrd: STRING!
        gameCart: [Game]
    }

    type Game {
        _id: ID!
        name: STRING!
        img: STRING!
        description: STRING!
        reviews: [Review]
    }
    
    type Review {
        _id: ID!
        text: STRING!
        ratings: [Rating]
    }
    
    type Rating {
        _id: ID!
        value: INTEGER!        
    }

    type Query {
        games: [Game]!
        game(gameId: ID!): Game
        
    }
    `

