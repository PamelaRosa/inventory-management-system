'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsInput extends Model {
    static associate(models) {
      ProductsInput.belongsTo(models.User, { foreignKey: 'user_id' });
      ProductsInput.belongsTo(models.Supplier, { foreignKey: 'cnpj', targetKey: 'cnpj' });
      ProductsInput.belongsTo(models.Product, { foreignKey: 'product_id' });
      ProductsInput.hasMany(models.Balancing, { foreignKey: 'input_id' });
    }
  }
  ProductsInput.init({
    product: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Valor de quantidade inválido.'
        }
      }
    },
    unit_price: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor de preço inválido.'
        }
      }
    },
    input_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data inválido.'
        }
      }
    },
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
    modelName: 'ProductsInput',
    tableName: 'products_inputs',
    paranoid: true
  });
  return ProductsInput;
};
