const express = require("express");
var mysql2 = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "24M@mbaMentality",
    database: "web_back_end"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
  });