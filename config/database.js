const Sequelize = require("sequelize");

module.exports =  new Sequelize("piggybusiness", process.env.user, process.env.pw, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
