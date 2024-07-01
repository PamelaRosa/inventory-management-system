'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.belongsTo(models.Supplier, { foreignKey: 'cnpj', targetKey: 'cnpj', type: DataTypes.STRING });
      Order.hasMany(models.ItemsOrder, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    supplier: DataTypes.STRING,
    order_date: DataTypes.DATE,
    user_name: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    total_amount: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'suppliers',
        key: 'cnpj'
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
    modelName: 'Order',
    tableName: 'orders',
    paranoid: true
  });
  return Order;
};
