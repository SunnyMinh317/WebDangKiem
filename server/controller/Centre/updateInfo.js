import db from "../../db.js";
import bcrypt from "bcrypt"


export const updateCentreInfo = (req, res) => {
      //Hash password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      var sql =
        "UPDATE centre SET centreEmail= ?, centrePassword = ? WHERE  centreId = ?;"
      db.query(sql, [req.body.email, hash, req.body.centreId], function (err, data) {
          if (err) {
            return res.status(500).json(err + "Update Centre info NOT ok");
          } 
          return res.status(200).json("Update Centre info ok");
      });
}