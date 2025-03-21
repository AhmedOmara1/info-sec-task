const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  pname: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  description: { 
    type: DataTypes.TEXT 
  },
  price: { 
    type: DataTypes.DECIMAL, 
    allowNull: false 
  },
  stock: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt automatically
});

module.exports = Product;
