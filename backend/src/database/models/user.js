'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Supplier, { foreignKey: 'user_id', as: 'suppliers' });
      User.hasMany(models.Order, { foreignKey: 'user_id' });
      User.hasMany(models.Product, { foreignKey: 'user_id' });
      User.hasMany(models.ProductsInput, { foreignKey: 'user_id' });
      User.hasMany(models.ProductsOutput, { foreignKey: 'user_id' });
      User.hasMany(models.Balancing, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'O nome deve ter no mínimo 3 caracteres e no máximo 30.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato do email é inválido'
        }
      }
    },
    password: DataTypes.STRING,
    profile_photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    paranoid: true
  });
  return User;
};