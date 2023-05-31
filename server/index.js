import express from "express";
import db from "./db.js";
import cors from "cors";
import bodyParser from "body-parser";
import centreRoutes from "./routes/centreRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import deptRoutes from "./routes/deptRoutes.js";
import importCSV from "./controller/Department/importCSV.js";
import cookieParser from "cookie-parser";

// import cookiesParser from "cookie-parser"

const PORT = process.env.PORT || 8800;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/centre", centreRoutes);
app.use("/vehicle", vehicleRoutes);
app.use("/dept", deptRoutes )
app.use("/csv", importCSV)

//Test
app.get("/data", function (req, res) {
  var sql =
    "SELECT c.*, v.licensePlate, v.brand, v.model, date_format(v.manufactureDate, '%Y-%m-%d') as manufactureDate, v.certId, date_format(v.certDate, '%Y-%m-%d') as certDate, v.regionId, v.version, v.usePurpose, v.isCompany FROM (SELECT date_format(dob,'%Y-%m-%d') as dob, name, null as representative, address, phone, ov.* FROM owner o INNER JOIN ownervehicle ov on o.ownerId = ov.ownerId UNION ALL SELECT date_format(dob,'%Y-%m-%d') as dob, name, representative, address, phone, cv.* FROM company c INNER JOIN companyvehicle cv on c.ownerId = cv.ownerId) as c inner JOIN vehicles v on c.licensePlate =  v.licensePlate;";
  db.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
