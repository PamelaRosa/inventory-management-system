'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: 'user_id' });
      Product.belongsTo(models.Category, { foreignKey: 'category_id' });
      Product.hasMany(models.ProductsInput, { foreignKey: 'product_id' });
      Product.hasMany(models.ItemsOrder, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 200],
          msg: 'O nome do produto deve ter no mínimo 2 caracteres e no máximo 200.'
        }
      }
    },
    brand: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 100],
          msg: 'O nome da marca deve ter no mínimo 2 caracteres e no máximo 100.'
        }
      }
    },
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
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
    unit_promotional_price: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor de preço inválido.'
        }
      }
    },
    status: DataTypes.BOOLEAN,
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
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
    modelName: 'Product',
    tableName: 'products',
    paranoid: true
  });
  return Product;
};
