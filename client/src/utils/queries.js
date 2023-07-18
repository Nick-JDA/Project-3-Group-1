import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
{
  products {
    _id
    name
    description
    price
    quantity
    type
    category {
      _id 
      name
    }
  }
}
`;


export const Query_REVIEWS = gql`
  query getReviews($product: ID) {
    review(product: $product) {
      _id
      text
    }
  }
`;

export const Query_RATINGS = gql`
  query getRatings($product: ID) {
    rating(product: $product) {
      _id
      rate
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       type
//       category {
//         _id 
//         name
//       }
//     }
//   }
// `;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
          type
        }
      }
    }
  }
`;
