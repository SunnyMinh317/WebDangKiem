import db from "../../db.js";
import { centreId } from "../Centre/getCentreId.js";

export const getAllVehicle = (req, res) => {
    var sql =
        "SELECT DISTINCT temp.*, v.licensePlate, v.brand, v.model, DATE_FORMAT(v.manufactureDate, '%Y-%m-%d') AS manufactureDate, v.certId, DATE_FORMAT(v.certDate, '%Y-%m-%d') AS certDate, v.regionId, v.version, v.usePurpose, v.isCompany, DATE_FORMAT(r.registrationDate, '%Y-%m-%d') AS registrationDate, DATE_FORMAT(r.expireDate, '%Y-%m-%d') AS expireDate, DATE_FORMAT(cen.establishedDate, '%Y-%m-%d') AS establishedDate, cen.centreName, cen.centreCity, cen.centreDistrict, cen.centreEmail, cen.centrePassword, IF( r.registrationDate IS NULL, 0, IF( r.expireDate < CURRENT_DATE, 0, 1 ) ) AS isRegis, cen.centreId, r.id FROM ( SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, NULL AS representative, address, phone, ov.* FROM OWNER o INNER JOIN ownervehicle ov ON o.ownerId = ov.ownerId UNION ALL SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, representative, address, phone, cv.* FROM company c INNER JOIN companyvehicle cv ON c.ownerId = cv.ownerId ) AS temp INNER JOIN vehicles v ON temp.licensePlate = v.licensePlate INNER JOIN registration r ON r.licensePlate = v.licensePlate INNER JOIN centre cen ON cen.centreId = r.centreId WHERE r.id =( SELECT r2.id FROM registration r2 WHERE r2.licensePlate = r.licensePlate ORDER BY r2.id DESC LIMIT 1 ) LIMIT 200;";
    db.query(sql, function (err, data) {
        if (err) {
            return res.status(500).json(err);
        }
        console.log(centreId + " zai");
        return res.status(200).json(data);
    });
};

export const getAddCarForm = (req, res) => {
    const licensePlate = req.body.licensePlate;
    var sql =
        "SELECT DISTINCT temp.*, v.licensePlate, v.brand, v.model, DATE_FORMAT(v.manufactureDate, '%Y-%m-%d') AS manufactureDate, v.certId, DATE_FORMAT(v.certDate, '%Y-%m-%d') AS certDate, v.regionId, v.version, v.usePurpose, v.isCompany, DATE_FORMAT(r.registrationDate, '%Y-%m-%d') AS registrationDate, DATE_FORMAT(r.expireDate, '%Y-%m-%d') AS expireDate, DATE_FORMAT(cen.establishedDate, '%Y-%m-%d') AS establishedDate, cen.centreName, cen.centreCity, cen.centreDistrict, cen.centreEmail, cen.centrePassword, IF( r.registrationDate IS NULL, 0, IF( r.expireDate < CURRENT_DATE, 0, 1 ) ) AS isRegis, cen.centreId, r.id FROM ( SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, NULL AS representative, address, phone, ov.* FROM OWNER o INNER JOIN ownervehicle ov ON o.ownerId = ov.ownerId UNION ALL SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, representative, address, phone, cv.* FROM company c INNER JOIN companyvehicle cv ON c.ownerId = cv.ownerId ) AS temp INNER JOIN vehicles v ON temp.licensePlate = v.licensePlate INNER JOIN registration r ON r.licensePlate = v.licensePlate INNER JOIN centre cen ON cen.centreId = r.centreId WHERE r.id =( SELECT r2.id FROM registration r2 WHERE r2.licensePlate = r.licensePlate ORDER BY r2.id DESC LIMIT 1 ) and v.licensePlate = ?;";
    db.query(sql, [licensePlate], function (err, data) {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
};

export const getAddCarFormRegis = (req, res) => {
    const licensePlate = req.body.licensePlate;
    var insertRegistration =
        "INSERT INTO registration (registrationDate, centreId, licensePlate) VALUES (now(), ?);";

    var RegistrationItems = [centreId, licensePlate];

    db.query(
        insertRegistration,
        [RegistrationItems],
        (err, results, fields) => {
            if (err) {
                console.log("Unable to insert");
                return console.log(err);
            }
            console.log("Added regis");
        }
    );

    var updateRegistration =
        "UPDATE registration r1 SET expireDate = if( datediff( r1.registrationDate, ( SELECT manufactureDate FROM vehicles v WHERE r1.licensePlate = v.licensePlate ) ) < 2555, date_add(r1.registrationDate, INTERVAL 2 year), if( datediff( r1.registrationDate, ( SELECT manufactureDate FROM vehicles v WHERE r1.licensePlate = v.licensePlate ) ) < 7300, date_add(r1.registrationDate, INTERVAL 1 year), date_add(r1.registrationDate, INTERVAL 6 month) ) );";

    db.query(updateRegistration, (err) => {
        if (err) {
            console.log("Unable to update");
            return console.log(err);
        }
        console.log("Updated into" + centreId);
    });
};

export const getAllVehicleByCentre = (req, res) => {
    var sql =
        "SELECT DISTINCT temp.*, v.licensePlate, v.brand, v.model, DATE_FORMAT(v.manufactureDate, '%Y-%m-%d') AS manufactureDate, v.certId, DATE_FORMAT(v.certDate, '%Y-%m-%d') AS certDate, v.regionId, v.version, v.usePurpose, v.isCompany, DATE_FORMAT(r.registrationDate, '%Y-%m-%d') AS registrationDate, DATE_FORMAT(r.expireDate, '%Y-%m-%d') AS expireDate, DATE_FORMAT(cen.establishedDate, '%Y-%m-%d') AS establishedDate, cen.centreName, cen.centreCity, cen.centreDistrict, cen.centreEmail, cen.centrePassword, IF( r.registrationDate IS NULL, 0, IF( r.expireDate < CURRENT_DATE, 0, 1 ) ) AS isRegis, cen.centreId, r.id FROM ( SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, NULL AS representative, address, phone, ov.* FROM OWNER o INNER JOIN ownervehicle ov ON o.ownerId = ov.ownerId UNION ALL SELECT DATE_FORMAT(dob, '%Y-%m-%d') AS dob, NAME, representative, address, phone, cv.* FROM company c INNER JOIN companyvehicle cv ON c.ownerId = cv.ownerId ) AS temp INNER JOIN vehicles v ON temp.licensePlate = v.licensePlate INNER JOIN registration r ON r.licensePlate = v.licensePlate INNER JOIN centre cen ON cen.centreId = r.centreId WHERE r.id =( SELECT r2.id FROM registration r2 WHERE r2.licensePlate = r.licensePlate ORDER BY r2.id DESC LIMIT 1 ) and r.centreId = ?;";
    db.query(sql, centreId, function (err, data) {
        if (err) {
            return res.status(500).json(err);
        }
        console.log(centreId + "danhsah");
        return res.status(200).json(data);
    });
};
