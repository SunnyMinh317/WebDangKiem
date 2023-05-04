const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "24M@mbaMentality",
  database: "web_back_end",
});

module.exports = db;
