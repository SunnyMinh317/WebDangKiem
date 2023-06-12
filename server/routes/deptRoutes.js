import express from "express"
import importCSV from "../controller/Department/importCSV.js";
import db from "../db.js";
import { getRegByYear, getStatByYear } from "../controller/Department/getRegByYear.js";
import { getRegByMonth, getStatByMonth } from "../controller/Department/getRegByMonth.js";
import { getRegisDept } from "../controller/Department/getRegisDept.js";
import { getRegByQuarter, getStatByQuarter } from "../controller/Department/getRegByQuarter.js";
const router = express.Router();

router.get("/getRegByMonth", getRegByMonth)
router.get("/getRegByYear", getRegByYear)
router.get("/getRegisDept", getRegisDept)
router.get("/getRegByQuarter", getRegByYear)
router.get("/getStatByYear", getStatByYear)
router.get("/getStatByMonth", getStatByMonth)
router.get("/getStatByQuarter", getStatByQuarter)

export default router