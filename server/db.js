import mysql from "mysql2";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "registry_v2",
});

export default db;
