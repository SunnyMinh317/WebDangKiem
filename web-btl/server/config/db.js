const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "24M@mbaMentality",
database:"blog_posts" 
})

module.exports = db;