'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOutput extends Model {
    static associate(models) {
      ProductOutput.belongsTo(models.User, { foreignKey: 'user_id' });
      ProductOutput.belongsTo(models.Product, { foreignKey: 'product_id' });
      ProductOutput.hasMany(models.Balancing, { foreignKey: 'output_id' });
    }
  }
  ProductOutput.init({
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    promotion: DataTypes.BOOLEAN,
    output_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductOutput',
    tableName: 'products_outputs'
  });
  return ProductOutput;
};