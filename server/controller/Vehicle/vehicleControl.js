import db from "../../db.js";

export const getAllVehicle = (req, res) => {
        var sql =
         "SELECT temp.*, v.licensePlate, v.brand, v.model, DATE_FORMAT(v.manufactureDate, '%Y-%m-%d') AS manufactureDate, v.certId, DATE_FORMAT(v.certDate, '%Y-%m-%d') AS certDate, v.regionId, v.version, v.usePurpose, v.isCompany, date_format(r.registrationDate, '%Y-%m-%d') as registrationDate, date_format(r.expireDate, '%Y-%m-%d') as expireDate, date_format(cen.establishedDate, '%Y-%m-%d') as establishedDate, cen.centreName, cen.centreCity, cen.centreDistrict, cen.centreEmail, cen.centrePassword FROM ( SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, NULL AS representative, address, phone, ov.* FROM OWNER o INNER JOIN ownervehicle ov ON o.ownerId = ov.ownerId UNION ALL SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, representative, address, phone, cv.* FROM company c INNER JOIN companyvehicle cv ON c.ownerId = cv.ownerId ) AS temp INNER JOIN vehicles v ON temp.licensePlate = v.licensePlate INNER JOIN registration r ON r.licensePlate = v.licensePlate INNER JOIN centre cen ON cen.centreId = r.centreId;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
};

export const getAllVehicleByCentre = (req, res) => {
  var sql =
    "SELECT temp.*, v.licensePlate, v.brand, v.model, DATE_FORMAT(v.manufactureDate, '%Y-%m-%d') AS manufactureDate, v.certId, DATE_FORMAT(v.certDate, '%Y-%m-%d') AS certDate, v.regionId, v.version, v.usePurpose, v.isCompany, DATE_FORMAT(r.registrationDate, '%Y-%m-%d') AS registrationDate, DATE_FORMAT(r.expireDate, '%Y-%m-%d') AS expireDate, DATE_FORMAT(cen.establishedDate, '%Y-%m-%d') AS establishedDate, cen.centreName, cen.centreCity, cen.centreDistrict, cen.centreEmail, cen.centrePassword, IF( r.registrationDate IS NULL, 0, IF( r.expireDate < CURRENT_DATE, 0, 1 ) ) AS isRegis, cen.centreId FROM ( SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, NULL AS representative, address, phone, ov.* FROM OWNER o INNER JOIN ownervehicle ov ON o.ownerId = ov.ownerId UNION ALL SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, representative, address, phone, cv.* FROM company c INNER JOIN companyvehicle cv ON c.ownerId = cv.ownerId ) AS temp INNER JOIN vehicles v ON temp.licensePlate = v.licensePlate INNER JOIN registration r ON r.licensePlate = v.licensePlate INNER JOIN centre cen ON cen.centreId = r.centreId WHERE cen.centreId = 1;";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};