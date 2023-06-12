import db from "../../db.js";


export const getRegisDept = (req, res) => {
        var sql =
         "SELECT * FROM  registration;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}