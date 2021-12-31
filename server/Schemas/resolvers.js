//! resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

// importing thoughts and users
const { User, Book } = require('../models');

// importing signToken
// const { signToken } = require('../utils/auth');

// Authentication handling
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-__v -password').populate('books');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('books');
    },

    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params);
    },

    book: async (parent, { _id }) => {
      return Book.findOne({ _id });
    },
  },
};

module.exports = resolvers;
