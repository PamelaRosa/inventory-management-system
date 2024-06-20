const express = require('express');
const users = require('./usersRoute.js');
const categories = require('./categoriesRoute.js');


module.exports = app => {
  app.use(
    express.json(),
    users,
    categories,
  );
};