import db from "../../db.js";

export const updateCentreInfo = (req, res) => {
        var sql =
         "UPDATE centre SET centreEmail= ?, centrePassword = ? WHERE  centreId = ?;"
        db.query(sql, [req.body.email, req.body.password, req.body.centreId], function (err, data) {
            if (err) {
              return res.status(500).json(err + "Update Centre info NOT ok");
            } 
            return res.status(200).json("Update Centre info ok");
        });
}