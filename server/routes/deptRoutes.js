import express from "express"
import importCSV from "../controller/Department/importCSV.js";
import db from "../db.js";
import { getRegByYear, getRegByYearByCentre } from "../controller/Department/getRegByYear.js";
import { getRegByMonth, getRegByMonthByCentre } from "../controller/Department/getRegByMonth.js";
import { getRegisDept } from "../controller/Department/getRegisDept.js";
const router = express.Router();

router.get("/getRegByMonth", getRegByMonth)
router.get("/getRegByMonthByCentre", getRegByMonthByCentre)
router.get("/getRegByYear", getRegByYear)
router.get("/getRegByYearByCentre", getRegByYearByCentre)
router.get("/getRegisDept", getRegisDept)



export default router