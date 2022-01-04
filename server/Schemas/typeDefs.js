//! typeDefs.js: Define the necessary Query and Mutation types:

//! Defines the querie being made
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(Book: BookData): User
    deleteBook(bookId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID!
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  input BookData {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
  }
`;

// export the typeDefs
module.exports = typeDefs;
