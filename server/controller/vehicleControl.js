import db from "../db.js";

export const getAllVehicle = (req, res) => {
        var sql =
         "SELECT owner.*, ownervehicle.* , vehicles.* FROM owner JOIN ownervehicle ON owner.ownerId = ownervehicle.ownerId JOIN vehicles ON ownervehicle.licensePlate = vehicles.licensePlate;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}