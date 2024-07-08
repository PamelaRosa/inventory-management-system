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
    order_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data inválido.'
        }
      }
    },
    client: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'O nome deve ter no mínimo 3 caracteres e no máximo 30.'
        }
      }
    },
    client_email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato do email é inválido'
        }
      }
    },
    delivery_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data inválido.'
        }
      }
    },
    total_amount: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor númerico inválido.'
        }
      }
    },
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
