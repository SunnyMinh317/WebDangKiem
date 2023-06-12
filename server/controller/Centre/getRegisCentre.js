import db from "../../db.js";
import { centreId } from "./getCentreId.js";    


export const getRegisCentre = (req, res) => {
        var sql =
         "SELECT DATE_FORMAT(registrationDate, '%d-%m-%Y') as registrationDate, DATE_FORMAT(expireDate, '%d-%m-%Y') as expireDate, centreId, licensePlate FROM  registration WHERE  centreId = ?;"
        db.query(sql, centreId, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}