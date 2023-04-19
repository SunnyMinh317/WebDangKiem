const express = require("express");
var mysql2 = require('mysql2');

const PORT = process.env.PORT || 8800;

const app = express();


app.get('/data', function (req, res) {
  var sql = "SELECT * FROM centre";
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/owner', function (req, res) {
  var sql = "SELECT * FROM owner";
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "registry_total"
  });
