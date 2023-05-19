import db from "../../db.js";


export const getNewReg = (req, res) => {
        var sql =
         "SELECT calendar.month, IFNULL(reg_count, 0) AS reg_count FROM ( SELECT DISTINCT month(registrationDate) AS month FROM registration WHERE registrationDate < CURRENT_DATE and year(registrationDate) < year(CURRENT_DATE) ) AS calendar LEFT JOIN ( SELECT month(registrationDate) AS month, COUNT(*) AS reg_count FROM registration WHERE year(registrationDate) = year(CURRENT_DATE) - 1 GROUP BY month ) AS regis ON calendar.month = regis.month ORDER BY calendar.month;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}