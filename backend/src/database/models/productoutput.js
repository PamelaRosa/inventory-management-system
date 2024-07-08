'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOutput extends Model {
    static associate(models) {
      ProductsOutput.belongsTo(models.User, { foreignKey: 'user_id' });
      ProductsOutput.belongsTo(models.Product, { foreignKey: 'product_id' });
      ProductsOutput.hasMany(models.Balancing, { foreignKey: 'output_id' });
    }
  }
  ProductsOutput.init({
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
    promotion: DataTypes.BOOLEAN,
    output_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data inválido.'
        }
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
    modelName: 'ProductsOutput',
    tableName: 'products_outputs',
    paranoid: true
  });
  return ProductsOutput;
};
