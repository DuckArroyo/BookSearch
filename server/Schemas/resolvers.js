//! resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

// importing thoughts and users
const { User, Thought } = require('../models');

// importing signToken
const { signToken } = require('../utils/auth');

// Authentication handling
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  //! CODE IT
};

module.exports = resolvers;
