import db from "../db.js";

export const register = (req,res) =>{
    // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?"
  
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json("Can't check");
    if (data.length) return res.status(409).json("User already exists!");

    const q = "INSERT INTO users(`username`,`fullname`, `email`,`password`, `pin`) VALUES (?)";
    const values = [req.body.username,req.body.fullname, req.body.email, req.body.password, req.body.pin];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
  
}


export const login = (req, res) => {
  const q = "SELECT * FROM centre WHERE centreEmail = ?"
  db.query(q, [req.body.email], (err, data) => {
    console.log(req.body.email)
    if (err) return res.status(500).json(err);
    if(data.length === 0){
      return res.status(404).json("Wrong username or password")
      console.log("Not found user");
    }
    if(!(req.body.password === data[0].centrePassword)) return res.status(400).json("Wrong username or password")
    
    const {password, ...other} = data[0]

    return res.status(200).json(req.body.email)
  })
}

export const logout = (req, res) => {
    res.status(200).json("User has been logout")
}
