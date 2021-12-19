require("dotenv").config();
const pgPromise = require("pg-promise");

const pgp = pgPromise({}); // Empty object means no additional config required

const config = {
  host: "localhost",
  user: "postgres",
  password: "0000",
  database: "users",
};

const db = pgp(config);

exports.db = db;
