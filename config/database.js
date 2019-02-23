const Sequelize = require("sequelize");

module.exports =  if (process.env.JAWSDB_URL) { new Sequelize (
  process.env.JAWSDB_URL, "wv6jalv1r952yogf", "w4jcn01p5aam3s4t"
) } else
  
  new Sequelize("piggybusiness", process.env.user, process.env.pw, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
