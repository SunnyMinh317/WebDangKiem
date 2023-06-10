import db from "../../db.js";
let centreId = null;

export const getCentreId = (req, res) => {
    centreId = req.body.centreId;
}

export {centreId};