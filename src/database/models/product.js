'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: 'user_id' });
      Product.belongsTo(models.Category, { foreignKey: 'category_id' });
      Product.hasMany(models.ProductsInput, { foreignKey: 'product_id' });
      Product.hasMany(models.ItemsOrder, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL,
    unit_promotional_price: DataTypes.DECIMAL,
    status: DataTypes.BOOLEAN,
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
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
    modelName: 'Product',
    tableName: 'products',
    paranoid: true
  });
  return Product;
};
