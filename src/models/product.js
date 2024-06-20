'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: 'user_id' });
      Product.belongsTo(models.ProductsInput, { foreignKey: 'input_id' });
      Product.belongsTo(models.Categories, { foreignKey: 'category_id' });
      Product.hasMany(models.ProductsOutput, { foreignKey: 'product_id' });
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
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};