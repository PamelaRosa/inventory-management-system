const express = require('express');
const users = require('./usersRoute.js');
const categories = require('./categoriesRoute.js');
const itemOrders = require('./itemOrdersRoute.js');


module.exports = app => {
  app.use(
    express.json(),
    users,
    categories,
    itemOrders
  );
};