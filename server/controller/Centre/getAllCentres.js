import db from "../../db.js";

export const getAllCentres = (req, res) => {
        var sql =
         "SELECT * FROM centre;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}