'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInput extends Model {
    static associate(models) {
      ProductInput.belongsTo(models.User, { foreignKey: 'user_id' });
      ProductInput.belongsTo(models.Supplier, { foreignKey: 'cnpj', type: DataTypes.STRING });
      ProductInput.hasMany(models.Product, { foreignKey: 'input_id' });
    }
  }
  ProductInput.init({
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL,
    input_date: DataTypes.DATE,
    supplier: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductInput',
    tableName: 'products_inputs'
  });
  return ProductInput;
};