'use strict';
const {
  Model
} = require('sequelize');
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
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Balancing',
    tableName: 'balancings'
  });
  return Balancing;
};