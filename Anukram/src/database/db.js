const pg = require("pg");

const { Pool } = pg;

const DBInstance = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "anukram",
});

module.exports = DBInstance;
