'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Balancing extends Model {
    static associate(models) {
      Balancing.belongsTo(models.User, { foreignKey: 'user_id' });
      Balancing.belongsTo(models.ProductsInput, { foreignKey: 'input_id' });
      Balancing.belongsTo(models.ProductsOutput, { foreignKey: 'output_id' });
    }
  }

  Balancing.init({
    most_sold: DataTypes.STRING,
    total_sales_promotional: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor númerico inválido.'
        }
      }
    },
    total_sales: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor númerico inválido.'
        }
      }
    },
    investment: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor númerico inválido.'
        }
      }
    },
    revenue: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor númerico inválido.'
        }
      }
    },
    profit: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Valor númerico inválido.'
        }
      }
    },
    start_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data inválido.'
        }
      }
    },
    end_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data inválido.'
        }
      }
    },
    input_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products_inputs',
        key: 'id'
      }
    },
    output_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products_outputs',
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
    modelName: 'Balancing',
    tableName: 'balancings',
    paranoid: true
  });

  return Balancing;
};
