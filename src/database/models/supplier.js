'use strict';
const {
  Model
} = require('sequelize');
const { cnpj } = require('cpf-cnpj-validator');

module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    static associate(models) {
      Supplier.belongsTo(models.User, { foreignKey: 'user_id' });
      Supplier.hasMany(models.Order, { foreignKey: 'cnpj', type: DataTypes.STRING });
      Supplier.hasMany(models.ProductsInput, { foreignKey: 'cnpj', type: DataTypes.STRING });
      Supplier.hasMany(models.Product, { foreignKey: 'cnpj', type: DataTypes.STRING });
    }
  }
  Supplier.init({
    cnpj: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isCNPJValid(value) {
          if (!cnpj.isValid(value)) {
            throw new Error('CNPJ inválido');
          }
        }
      }
    },
    company: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 200],
          msg: 'O nome do fornecedor deve ter no mínimo 2 caracteres e no máximo 200.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato do email é inválido'
        }
      }
    },
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
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
    paranoid: true
  });
  return Supplier;
};