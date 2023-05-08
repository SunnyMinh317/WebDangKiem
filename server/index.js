import express from "express"
import db from "./db.js"
import cors from "cors"
import bodyParser from "body-parser"
import centreRoutes from "./routes/centreRoutes.js"
import vehicleRoutes from "./routes/vehicleRoutes.js"
import deptRoutes from "./routes/deptRoutes.js"
import importCSV from "./controller/Department/importCSV.js"
// import cookiesParser from "cookie-parser"

const PORT = process.env.PORT || 8800;

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json())
// app.use(cookiesParser)

app.use("/centre", centreRoutes)
app.use("/vehicle", vehicleRoutes)
app.use("/dept", deptRoutes )
app.use("/csv", importCSV)


app.get("/ownervehicles", function (req, res) {
  var sql =
   "SELECT owner.*, ownervehicle.* , vehicles.* FROM owner JOIN ownervehicle ON owner.ownerId = ownervehicle.ownerId JOIN vehicles ON ownervehicle.licensePlate = vehicles.licensePlate;"
  db.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

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

