//! resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

// importing thoughts and users
const { User, Book } = require('../models');

// importing signToken
// const { signToken } = require('../utils/auth');

// Authentication handling
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
  },
};

module.exports = resolvers;
