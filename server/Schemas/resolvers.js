//! resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

// importing thoughts and users
const { User, Book } = require('../models');

// importing signToken
const { signToken } = require('../utils/auth');

// Authentication handling
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('books');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

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

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect login information');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },

    addBook: async (parent, args, context) => {
      if (context.user) {
        const book = await Book.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { books: book._id } },
          { new: true }
        );
    
        return book;
      }
    
      throw new AuthenticationError('You need to login to add a book!');
    },
  },
};

module.exports = resolvers;
