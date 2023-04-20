import express from "express"
import db from "./db.js"
import cors from "cors"
import bodyParser from "body-parser"
import authRoutes from "./routes/auth.js"
// import cookiesParser from "cookie-parser"

const PORT = process.env.PORT || 8800;

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true})); 
// app.use(bodyParser.json())
// app.use(cookiesParser)

app.use("/auth", authRoutes)

//Test
app.get('/data', function (req, res) {
  var sql = "SELECT * FROM centre";
  db.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/owner', function (req, res) {
  var sql = "SELECT * FROM owner";
  db.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});
//test

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

