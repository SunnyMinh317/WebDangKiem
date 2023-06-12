import db from "../../db.js";

export const getRegByQuarter = (req, res) => {
  var sql =
    "WITH expire_reg AS ( SELECT calendar.quarter, IFNULL(expire_count, 0) AS expire_count FROM ( SELECT 1 AS quarter UNION SELECT 2 AS quarter UNION SELECT 3 AS quarter UNION SELECT 4 AS quarter ) AS calendar LEFT JOIN ( SELECT QUARTER(expireDate) AS quarter, COUNT(*) AS expire_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) GROUP BY QUARTER(expireDate) ORDER BY quarter LIMIT 4 ) AS EXPIRE ON calendar.quarter = EXPIRE.quarter ), new_reg AS ( SELECT calendar.quarter, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT 1 AS quarter UNION SELECT 2 AS quarter UNION SELECT 3 AS quarter UNION SELECT 4 AS quarter ) AS calendar LEFT JOIN ( SELECT QUARTER(registrationDate) AS quarter, COUNT(*) AS reg_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE year(registrationDate) = year(CURRENT_DATE) - 2 GROUP BY quarter ORDER BY quarter LIMIT 4 ) AS regis ON calendar.quarter = regis.quarter ) SELECT expire_reg.quarter, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.quarter = new_reg.quarter ORDER BY expire_reg.quarter;";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getStatByQuarter = (req, res) => {
  var sql =
    "WITH expire_reg AS( SELECT calendar.quarter, IFNULL(expire_count, 0) AS expire_count FROM ( SELECT 1 AS QUARTER UNION SELECT 2 AS QUARTER UNION SELECT 3 AS QUARTER UNION SELECT 4 AS QUARTER ) AS calendar LEFT JOIN( SELECT QUARTER(expireDate) AS quarter, COUNT(*) AS expire_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) - 1 GROUP BY QUARTER(expireDate) ORDER BY QUARTER LIMIT 4 ) AS EXPIRE ON calendar.quarter = EXPIRE.quarter ), new_reg AS( SELECT calendar.quarter, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT 1 AS QUARTER UNION SELECT 2 AS QUARTER UNION SELECT 3 AS QUARTER UNION SELECT 4 AS QUARTER ) AS calendar LEFT JOIN( SELECT QUARTER(registrationDate) AS quarter, COUNT(*) AS reg_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE YEAR(registrationDate) = YEAR(CURRENT_DATE) - 1 GROUP BY QUARTER ORDER BY QUARTER LIMIT 4 ) AS regis ON calendar.quarter = regis.quarter ) SELECT expire_reg.quarter, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.quarter = new_reg.quarter ORDER BY expire_reg.quarter;";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};
