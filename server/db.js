import mysql from "mysql2";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_back_end",
});

export default db;
