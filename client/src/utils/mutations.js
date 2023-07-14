import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

export const ADD_GAME = gql`
    mutation addGame($userId: ID!, $name: String!, ) {
        addGame() {

        }
    }`


export const REMOVE_GAME = gql`
    mutation removeGame() {
        removeGame() {

        }
    }`

export const ADD_REVIEW = gql`
    mutation addReview($text: String!) {
        addReview(text: $text) {
            _id
            text
            ratings {
                _id
                rating
            }
        }
    }`;

export const ADD_RATING = gql`
    mutation addRating($rating: Integer!) {
        addRating(rating: $rating) {
            _id
            rating
        }
    }`;
