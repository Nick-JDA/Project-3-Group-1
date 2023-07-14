import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      bookCount
      gameCart {
        name
        img
        description
        reviews {
            text
            ratings {
                value
            }
        }
      }
    }
  }
`;