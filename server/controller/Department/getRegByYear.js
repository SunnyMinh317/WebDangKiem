import db from "../../db.js";


export const getRegByYear = (req, res) => {
        var sql =
         "WITH new_reg AS (SELECT YEAR(registrationDate) + 5 AS year, COUNT(*) AS new_reg_count FROM registration WHERE registrationDate >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) GROUP BY YEAR(registrationDate) ORDER BY YEAR(registrationDate) LIMIT 5), expire_reg AS (SELECT YEAR(expireDate) AS year, COUNT(*) AS expire_count FROM registration WHERE YEAR(expireDate) >= YEAR(CURRENT_DATE) GROUP BY YEAR(expireDate) ORDER BY YEAR(expireDate) LIMIT 5) SELECT new_reg.year, new_reg.new_reg_count, expire_reg.expire_count FROM new_reg JOIN expire_reg ON new_reg.year = expire_reg.year;"
        db.query(sql, function (err, data) {
            if (err) {
              return res.status(500).json(err);
            } 
            return res.status(200).json(data);
        });
}