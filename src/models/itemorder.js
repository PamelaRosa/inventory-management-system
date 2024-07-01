'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemOrder extends Model {
    static associate(models) {
      ItemOrder.belongsTo(models.Order, { foreignKey: 'order_id' });
      ItemOrder.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  }
  ItemOrder.init({
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
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
    modelName: 'ItemOrder',
    tableName: 'items_orders'
  });
  return ItemOrder;
};
