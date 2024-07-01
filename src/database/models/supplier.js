'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    static associate(models) {
      Supplier.belongsTo(models.User, { foreignKey: 'user_id' });
      Supplier.hasMany(models.Order, { foreignKey: 'cnpj', type: DataTypes.STRING });
      Supplier.hasMany(models.ProductsInput, { foreignKey: 'cnpj', type: DataTypes.STRING });
    }
  }
  Supplier.init({
    cnpj: {
      type: DataTypes.STRING,
      unique: true
    },
    company: {
      type: DataTypes.STRING,
      unique: true
    },
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Supplier',
    tableName: 'suppliers',
  });
  return Supplier;
};