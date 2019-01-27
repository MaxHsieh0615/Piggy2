const Sequelize = require('sequelize');
const db = require('../config/database');

const Child = db.define('children', {
  child_name: {
    type: Sequelize.STRING
  },
  piggy: {
    type: Sequelize.STRING
  }
});

// .sync creates tables in mysql, using sequelize cmd
Child.sync({ alter: true });

module.exports = Child;