const Sequelize = require('sequelize');
const db = require('../config/database');

const Job = db.define('job', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  job_status: {
    type: Sequelize.STRING,
    values: Sequelize.ENUM('Open', 'Closed')
  },
  job_owner: {
    type: Sequelize.STRING
  }
});

// .sync creates tables in mysql, using sequelize cmd
Job.sync({ alter: true });

module.exports = Job;