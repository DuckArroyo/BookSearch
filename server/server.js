// Standard server stuffs
const express = require('express');
const path = require('path');

//Import config settings. This is good.
const db = require('./config/connection');

//! Not needed for upgrade
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO GOOD
app.use(express.urlencoded({ extended: true }));
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
