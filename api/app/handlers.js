'use strict';

const mongoClient = require('./mongoClient');

const getArticleListHandler = (request, reply) => {
  const {
    limit = 24,
    pagination,
    sortField = 'published_date',
    sortOrder = 'desc',
  } = request.query;

  const sortOrderMap = {
    asc: 1,
    decd: -1
  };

  const sort = {
    sortField: sortOrderMap[sortOrder]
  }

  const query = {
    image: {
      $exists: true,
    }
  };

  console.log(mongoClient)

  return mongoClient
    .then(db => db
      .collection('articles')
      .find(query, options)
      .skip(pagination)
      .limit(limit)
      .sort(sort)
    );

};

module.exports = {
  getArticleListHandler,
};
