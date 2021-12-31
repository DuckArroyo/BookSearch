//! typeDefs.js: Define the necessary Query and Mutation types:

//! Defines the querie being made
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`



type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: bookId
    author: [authors]
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(Book!: [author, description, title, bookId, image, link]) User
    removeBook(bookId: ID!): User
}

type Auth {
    token: ID
    user: User
}

`;

// export the typeDefs
module.exports = typeDefs;
