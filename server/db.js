import mysql from "mysql2";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "registry_v3",
});

export default db;
