// Front-End Specifications
// You'll need to create the following front-end files:

import { gql } from '@apollo/client';

// mutations.js:

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// SAVE_BOOK will execute the saveBook mutation.
export const SAVE_BOOK = gql`
  mutation saveBook(title: String!) {
    addTBook(title: $title) {
    _id
    title
    authors
    description
    link
    image
    }
  }
`;

// REMOVE_BOOK will execute the removeBook mutation.
export const REMOVE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      _id
      title
    }
  }
`;
