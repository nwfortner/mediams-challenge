'use strict';

const MongoClient = require('mongodb').MongoClient

const mongoHost = 'mongodb://mongodb:27017';
const databaseName = 'code-challenge';

const client = MongoClient
  .connect(mongoHost)
  .then(client => client.db(databaseName))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports = client;
