import express from "express"
import importCSV from "../controller/Department/importCSV.js";
import db from "../db.js";
import { getRegByYear, getStatByYear } from "../controller/Department/getRegByYear.js";
import { getRegByMonth, getStatByMonth } from "../controller/Department/getRegByMonth.js";
import { getRegisDept } from "../controller/Department/getRegisDept.js";
import { getRegByQuarter, getStatByQuarter } from "../controller/Department/getRegByQuarter.js";
const router = express.Router();


router.get("/getRegisDept", getRegisDept)
router.post("/getRegByMonth", getRegByMonth)
router.post("/getRegByYear", getRegByYear)
router.post("/getRegByQuarter", getRegByQuarter)
router.post("/getStatByYear", getStatByYear)
router.post("/getStatByMonth", getStatByMonth)
router.post("/getStatByQuarter", getStatByQuarter)

export default router