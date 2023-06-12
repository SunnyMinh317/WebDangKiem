import mysql from "mysql2";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "24M@mbaMentality",
  database: "web_back_end",
});

export default db;
