import db from "../../db.js";

export const getAllVehicle = (req, res) => {
  var sql =
   "SELECT c.*, v.licensePlate, v.brand, v.model, date_format(v.manufactureDate, '%Y-%m-%d') as manufactureDate, v.certId, date_format(v.certDate, '%Y-%m-%d') as certDate, v.regionId, v.version, v.usePurpose, v.isCompany FROM (SELECT date_format(dob,'%Y-%m-%d') as dob, name, null as representative, address, phone, ov.* FROM owner o INNER JOIN ownervehicle ov on o.ownerId = ov.ownerId UNION ALL SELECT date_format(dob,'%Y-%m-%d') as dob, name, representative, address, phone, cv.* FROM company c INNER JOIN companyvehicle cv on c.ownerId = cv.ownerId) as c inner JOIN vehicles v on c.licensePlate =  v.licensePlate;"
  db.query(sql, function (err, data) {
      if (err) {
        return res.status(500).json(err);
      } 
      return res.status(200).json(data);
  });
}