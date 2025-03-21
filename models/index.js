const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');

(async () => {
  await sequelize.sync({ force: false });
  console.log('Database synced!');
})();

module.exports = { User, Product };
