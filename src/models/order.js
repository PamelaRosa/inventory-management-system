'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.belongsTo(models.Supplier, { foreignKey: 'cnpj', type: DataTypes.STRING });
      Order.hasMany(models.ItemsOrder, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    supplier: DataTypes.STRING,
    order_date: DataTypes.DATE,
    user_name: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    total_amount: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Order;
};