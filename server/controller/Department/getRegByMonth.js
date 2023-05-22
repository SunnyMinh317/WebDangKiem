import db from "../../db.js";

export const getRegByMonth = (req, res) => {
        var sql =
         "WITH expire_reg AS (SELECT calendar.month, IFNULL(reg_count, 0) AS expire_count FROM (SELECT DISTINCT MONTH(expireDate) AS month FROM registration WHERE expireDate < CURRENT_DATE AND YEAR(expireDate) < YEAR(CURRENT_DATE)) AS calendar LEFT JOIN (SELECT MONTH(expireDate) AS month, COUNT(*) AS reg_count FROM registration WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) GROUP BY MONTH(expireDate)) AS regis ON calendar.month = regis.month ORDER BY calendar.month),new_reg AS (SELECT calendar.month, IFNULL(reg_count, 0) AS new_reg_count FROM (SELECT DISTINCT MONTH(registrationDate) AS month FROM registration WHERE registrationDate < CURRENT_DATE AND YEAR(registrationDate) < YEAR(CURRENT_DATE)) AS calendar LEFT JOIN (SELECT MONTH(registrationDate) AS month, COUNT(*) AS reg_count FROM registration WHERE YEAR(registrationDate) = YEAR(CURRENT_DATE) - 1 GROUP BY MONTH(registrationDate)) AS regis ON calendar.month = regis.month ORDER BY calendar.month) SELECT expire_reg.month, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.month = new_reg.month ORDER BY MONTH;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}