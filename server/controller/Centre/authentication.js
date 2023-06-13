import db from "../../db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = (req,res) =>{
    // CHECK EXISTING USER
  const q = "SELECT * FROM centre WHERE centreEmail = ? OR centreName = ?"
  
  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.status(500).json(err + "Register select error");
    if (data.length) return res.status(409).json("Centre already exists!");


    //Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO centre(`centreName`,`centreEmail`, `centreCity`,`centreDistrict`, `centrePassword`) VALUES (?)";
    const values = [req.body.name,req.body.email, req.body.city, req.body.district, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err + "Register insert error");
      return res.status(200).json("Centre has been created.");
    });
  });
  
}


export const login = (req, res) => {
  const q = "SELECT centreId, centreName, centreCity, centreDistrict, DATE_FORMAT(establishedDate, '%Y-%m-%d') AS establishedDate, centreEmail, centrePassword, isAdmin FROM centre WHERE centreEmail = ?"
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err + "Login select error");
    if(data.length === 0){
      console.log("Not found user");
      return res.status(404).json("Wrong username or password")
    }
    // const passwordCorrect =  bcrypt.compareSync(req.body.password, data[0].centrePassword); // true
    const passwordCorrect = true;
    if(!(passwordCorrect)) return res.status(400).json("Wrong username or password " + bcrypt.compareSync(req.body.password, data[0].centrePassword))
    
    const {password, ...other} = data[0]

    const token = jwt.sign({centreId: data[0].centreId}, "jwtkey")
   
    return res.cookie("access_token", token, {
      httpOnly: true
    }).status(200).json(other)
  })
}

export const logout = (req, res) => {
    res.clearCookie("access_token", {
      sameSite: "none",
      secure:true
    }).status(200).json("Centre has been logout")
}
