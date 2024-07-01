'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemsOrder extends Model {
    static associate(models) {
      ItemsOrder.belongsTo(models.Order, { foreignKey: 'order_id'});
      ItemsOrder.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  }
  ItemsOrder.init({
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
    modelName: 'ItemsOrder',
    tableName: 'items_orders'
  });
  return ItemsOrder;
};
