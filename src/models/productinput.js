'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInput extends Model {
    static associate(models) {
      ProductInput.belongsTo(models.User, { foreignKey: 'user_id' });
      ProductInput.belongsTo(models.Supplier, { foreignKey: 'cnpj', targetKey: 'cnpj' });
      ProductInput.belongsTo(models.Product, { foreignKey: 'product_id' });
      ProductInput.hasMany(models.Balancing, { foreignKey: 'input_id' });
    }
  }
  ProductInput.init({
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL,
    input_date: DataTypes.DATE,
    supplier: DataTypes.STRING,
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'suppliers',
        key: 'cnpj'
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
    modelName: 'ProductInput',
    tableName: 'products_inputs'
  });
  return ProductInput;
};
