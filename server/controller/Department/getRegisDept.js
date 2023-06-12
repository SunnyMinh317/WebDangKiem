import db from "../../db.js";


export const getRegisDept = (req, res) => {
        var sql =
         "SELECT DATE_FORMAT(registrationDate, '%d-%m-%Y') AS registrationDate, DATE_FORMAT(expireDate, '%d-%m-%Y') AS expireDate, registration.centreId, licensePlate, centreName FROM registration INNER JOIN centre on registration.centreId = centre.centreId;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}