import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books($username: String) {
    books(username: $username) {
      _id
      title
      authors
      description
      link
      image
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      books {
        title
      }
    }
  }
`;
