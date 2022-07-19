// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initializes Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// sets up fields and rules for the Product model
Product.init(
// columns defined
  {
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
