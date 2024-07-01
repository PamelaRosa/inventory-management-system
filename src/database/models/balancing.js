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
    total_sales_promotional: DataTypes.DECIMAL,
    total_sales: DataTypes.DECIMAL,
    investment: DataTypes.DECIMAL,
    revenue: DataTypes.DECIMAL,
    profit: DataTypes.DECIMAL,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
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
