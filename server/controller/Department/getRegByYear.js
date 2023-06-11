import db from "../../db.js";
import { centreId } from "../Centre/getCentreId.js";

export const getRegByYear = (req, res) => {
  var sql =
    "WITH expire_reg AS( SELECT calendar.year, IFNULL(expire_count, 0) AS expire_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 1 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 4 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(expireDate) AS year, COUNT(*) AS expire_count FROM registration WHERE year(expireDate) >= year(CURRENT_DATE) GROUP BY YEAR(expireDate) ORDER BY YEAR(expireDate) LIMIT 5 ) AS expire ON calendar.year = expire.year ORDER BY calendar.year ), new_reg AS( SELECT calendar.year, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 1 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 4 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(registrationDate) + 5 AS year, COUNT(*) AS reg_count FROM registration WHERE registrationDate >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) GROUP BY YEAR(registrationDate) ORDER BY YEAR(registrationDate) LIMIT 5 ) AS regis ON calendar.year = regis.year ORDER BY calendar.year ) SELECT expire_reg.year, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.year = new_reg.year ORDER BY YEAR;";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getRegByYearByCentre = (req, res) => {
  var sql =
    "WITH expire_reg AS( SELECT calendar.year, IFNULL(expire_count, 0) AS expire_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 1 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 4 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(expireDate) AS year, COUNT(*) AS expire_count FROM registration inner join centre on centre.centreId = registration.centreId WHERE year(expireDate) >= year(CURRENT_DATE) and centre.centreId = 1 GROUP BY YEAR(expireDate) ORDER BY YEAR(expireDate) LIMIT 5 ) AS expire ON calendar.year = expire.year ORDER BY calendar.year ), new_reg AS( SELECT calendar.year, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 1 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 4 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(registrationDate) + 5 AS year, COUNT(*) AS reg_count FROM registration inner join centre on centre.centreId = registration.centreId WHERE registrationDate >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and centre.centreId = ? GROUP BY YEAR(registrationDate) ORDER BY YEAR(registrationDate) LIMIT 5 ) AS regis ON calendar.year = regis.year ORDER BY calendar.year ) SELECT expire_reg.year, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.year = new_reg.year ORDER BY YEAR;";
  db.query(sql, centreId, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};
