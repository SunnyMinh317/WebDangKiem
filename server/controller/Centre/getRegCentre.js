import db from "../../db.js";
import { centreId } from "../Centre/getCentreId.js";


export const getRegByYearByCentre = (req, res) => {
  var sql =
    "WITH expire_reg AS( SELECT calendar.year, IFNULL(expire_count, 0) AS expire_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 1 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 4 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(expireDate) AS year, COUNT(*) AS expire_count FROM registration inner join centre on centre.centreId = registration.centreId WHERE year(expireDate) >= year(CURRENT_DATE) and centre.centreId = ? GROUP BY YEAR(expireDate) ORDER BY YEAR(expireDate) LIMIT 5 ) AS expire ON calendar.year = expire.year ORDER BY calendar.year ), new_reg AS( SELECT calendar.year, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 1 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) + 4 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(registrationDate) + 5 AS year, COUNT(*) AS reg_count FROM registration inner join centre on centre.centreId = registration.centreId WHERE registrationDate >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and centre.centreId = ? GROUP BY YEAR(registrationDate) ORDER BY YEAR(registrationDate) LIMIT 5 ) AS regis ON calendar.year = regis.year ORDER BY calendar.year ) SELECT expire_reg.year, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.year = new_reg.year ORDER BY YEAR;";
  db.query(sql, centreId, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getRegByMonthByCentre = (req, res) => {
  var sql =
    "WITH expire_reg AS ( SELECT calendar.month, IFNULL(reg_count, 0) AS expire_count FROM ( SELECT DISTINCT MONTH(expireDate) AS month FROM registration WHERE expireDate < CURRENT_DATE AND YEAR(expireDate) < YEAR(CURRENT_DATE) ) AS calendar LEFT JOIN ( SELECT MONTH(expireDate) AS month, COUNT(*) AS reg_count FROM registration INNER JOIN centre on centre.centreId = registration.centreId WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) - 2 AND centre.centreId = ? GROUP BY MONTH(expireDate) ) AS regis ON calendar.month = regis.month ORDER BY calendar.month ), new_reg AS ( SELECT calendar.month, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT DISTINCT MONTH(registrationDate) AS month FROM registration WHERE registrationDate < CURRENT_DATE AND YEAR(registrationDate) < YEAR(CURRENT_DATE) ) AS calendar LEFT JOIN ( SELECT MONTH(registrationDate) AS month, COUNT(*) AS reg_count FROM registration INNER JOIN centre on centre.centreId = registration.centreId WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) - 2 AND centre.centreId = ? GROUP BY MONTH(registrationDate) ) AS regis ON calendar.month = regis.month ORDER BY calendar.month ) SELECT expire_reg.month, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.month = new_reg.month ORDER BY month;";
  db.query(sql, centreId, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getRegByQuarterByCentre = (req, res) => {
  var sql =
    "WITH expire_reg AS ( SELECT calendar.quarter, IFNULL(expire_count, 0) AS expire_count FROM ( SELECT 1 AS quarter UNION SELECT 2 AS quarter UNION SELECT 3 AS quarter UNION SELECT 4 AS quarter ) AS calendar LEFT JOIN ( SELECT QUARTER(expireDate) AS quarter, COUNT(*) AS expire_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) and centre.centreId = ? GROUP BY QUARTER(expireDate) ORDER BY quarter LIMIT 4 ) AS EXPIRE ON calendar.quarter = EXPIRE.quarter ), new_reg AS ( SELECT calendar.quarter, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT 1 AS quarter UNION SELECT 2 AS quarter UNION SELECT 3 AS quarter UNION SELECT 4 AS quarter ) AS calendar LEFT JOIN ( SELECT QUARTER(registrationDate) AS quarter, COUNT(*) AS reg_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE year(registrationDate) = year(CURRENT_DATE) - 1 and centre.centreId = ? GROUP BY quarter ORDER BY quarter LIMIT 4 ) AS regis ON calendar.quarter = regis.quarter ) SELECT expire_reg.quarter, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.quarter = new_reg.quarter ORDER BY expire_reg.quarter;";
  db.query(sql, centreId, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getStatByMonthByCentre = (req, res) => {
  var sql =
    "WITH expire_reg AS( SELECT calendar.month, IFNULL(reg_count, 0) AS expire_count FROM ( SELECT DISTINCT MONTH(expireDate) AS month FROM registration WHERE expireDate < CURRENT_DATE AND YEAR(expireDate) < YEAR(CURRENT_DATE) ) AS calendar LEFT JOIN( SELECT MONTH(expireDate) AS month, COUNT(*) AS reg_count FROM registration WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) - 1 GROUP BY MONTH(expireDate) ) AS regis ON calendar.month = regis.month ORDER BY calendar.month ), new_reg AS( SELECT calendar.month, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT DISTINCT MONTH(registrationDate) AS month FROM registration WHERE registrationDate < CURRENT_DATE AND YEAR(registrationDate) < YEAR(CURRENT_DATE) ) AS calendar LEFT JOIN( SELECT MONTH(registrationDate) AS month, COUNT(*) AS reg_count FROM registration WHERE YEAR(registrationDate) = YEAR(CURRENT_DATE) - 1 GROUP BY MONTH(registrationDate) ) AS regis ON calendar.month = regis.month ORDER BY calendar.month ) SELECT expire_reg.month, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.month = new_reg.month ORDER BY MONTH;";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getStatByQuarterByCentre = (req, res) => {
  var sql =
    "WITH expire_reg AS( SELECT calendar.month, IFNULL(reg_count, 0) AS expire_count FROM ( SELECT DISTINCT MONTH(expireDate) AS month FROM registration WHERE expireDate < CURRENT_DATE AND YEAR(expireDate) < YEAR(CURRENT_DATE) ) AS calendar LEFT JOIN( SELECT MONTH(expireDate) AS month, COUNT(*) AS reg_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE YEAR(expireDate) = YEAR(CURRENT_DATE) - 1 AND centre.centreId = ? GROUP BY MONTH(expireDate) ) AS regis ON calendar.month = regis.month ORDER BY calendar.month ), new_reg AS( SELECT calendar.month, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT DISTINCT MONTH(registrationDate) AS month FROM registration WHERE registrationDate < CURRENT_DATE AND YEAR(registrationDate) < YEAR(CURRENT_DATE) ) AS calendar LEFT JOIN( SELECT MONTH(registrationDate) AS month, COUNT(*) AS reg_count FROM registration INNER JOIN centre ON centre.centreId = registration.centreId WHERE YEAR(registrationDate) = YEAR(CURRENT_DATE) - 1 AND centre.centreId = ? GROUP BY MONTH(registrationDate) ) AS regis ON calendar.month = regis.month ORDER BY calendar.month ) SELECT expire_reg.month, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.month = new_reg.month ORDER BY MONTH;";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

export const getStatByYearByCentre = (req, res) => {
  var sql =
    "WITH expire_reg AS( SELECT calendar.year, IFNULL(expire_count, 0) AS expire_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) - 5 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) - 4 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) - 3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) - 2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) - 1 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(expireDate) AS YEAR, COUNT(*) AS expire_count FROM registration inner join centre on centre.centreId = registration.centreId WHERE YEAR(expireDate) >= YEAR(CURRENT_DATE) - 5 and centre.centreId = ? GROUP BY YEAR(expireDate) ORDER BY YEAR(expireDate) LIMIT 5 ) AS EXPIRE ON calendar.year = EXPIRE.year ORDER BY calendar.year ), new_reg AS( SELECT calendar.year, IFNULL(reg_count, 0) AS new_reg_count FROM ( SELECT DISTINCT YEAR(CURRENT_DATE) - 5 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) -4 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) -3 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) -2 AS YEAR FROM registration UNION SELECT DISTINCT YEAR(CURRENT_DATE) -1 AS YEAR FROM registration ) AS calendar LEFT JOIN( SELECT YEAR(registrationDate) AS YEAR, COUNT(*) AS reg_count FROM registration inner join centre on centre.centreId = registration.centreId WHERE registrationDate >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and centre.centreId = ? GROUP BY YEAR(registrationDate) ORDER BY YEAR(registrationDate) LIMIT 5) AS regis ON calendar.year = regis.year ORDER BY calendar.year ) SELECT expire_reg.year, expire_reg.expire_count, new_reg.new_reg_count FROM expire_reg JOIN new_reg ON expire_reg.year = new_reg.year ORDER BY YEAR;";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};