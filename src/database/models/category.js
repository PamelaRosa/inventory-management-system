'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: 'category_id'});
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 60],
          msg: 'O nome deve ter no mínimo 2 caracteres e no máximo 60.'
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    paranoid: true
  });
  return Category;
};