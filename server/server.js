// Standard server stuffs
const express = require('express');
const path = require('path');

//! Adding Apollo functionality
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./Schemas');

// Middleware function
const { authMiddleware } = require('./utils/auth');

//Import config settings. This is good.
const db = require('./config/connection');

//! Not needed for upgrade
// const routes = require('./routes');

// TODO GOOD
const app = express();
const PORT = process.env.PORT || 3001;

//! Create Apollo server
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(`Active at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

// TODO GOOD
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO GOOD
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// TODO GOOD - wild card GET
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build'));
});

//! Not needed for upgrade
// app.use(routes);

// TODO GOOD
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
