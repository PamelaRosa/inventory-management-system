'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Supplier, { foreignKey: 'user_id' });
      User.hasMany(models.Order, { foreignKey: 'user_id' });
      User.hasMany(models.Product, { foreignKey: 'user_id' });
      User.hasMany(models.ProductsInput, { foreignKey: 'user_id' });
      User.hasMany(models.ProductsOutput, { foreignKey: 'user_id' });
      User.hasMany(models.Balancing, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};