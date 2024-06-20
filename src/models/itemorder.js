'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemOrder extends Model {
    static associate(models) {
      ItemOrder.belongsTo(models.Order, { foreignKey: 'order_id' });
      ItemOrder.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  }
  ItemOrder.init({
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemOrder',
    tableName: 'items_orders'
  });
  return ItemOrder;
};