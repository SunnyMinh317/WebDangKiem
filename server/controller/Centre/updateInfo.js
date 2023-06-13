import db from "../../db.js";
import bcrypt from "bcrypt";

export const updateCentreInfo = (req, res) => {
  if(req.body.password.length == 0) {
    console.log("0 oke")
    return res.status(409).json("Please type new password");
  }
  //Hash password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const q = "SELECT centreId FROM centre WHERE centreEmail = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) {
      return res.status(500).json(err + "Email select error");
    }
    if (data.length) {
      if (data[0].centreId !== req.body.centreId) {
        console.log("email");
        return res.status(409).json("Email already exists!");
      }
    }

    const q = "SELECT centrePassword FROM centre WHERE centreId = ?";

    db.query(q, [req.body.centreId], (err, data) => {
      if (err) {
        return res.status(500).json(err + "Password select error");
      }
      if (data.length) {
        if (bcrypt.compareSync(req.body.password, data[0].centrePassword)) {
          console.log("password");
          return res.status(409).json("Password has been used");
        }
      }

      var sql =
        "UPDATE centre SET centreEmail= ?, centrePassword = ? WHERE  centreId = ?;";
      db.query(
        sql,
        [req.body.email, hash, req.body.centreId],
        function (err, data) {
          if (err) {
            return res.status(500).json(err + "Update Centre info NOT ok");
          }
          console.log("oke");
          return res.status(200).json("Update Centre info ok");
        }
      );
    });
  });
};
