import express from "express"
import importCSV from "../controller/Department/importCSV.js";
import db from "../db.js";
import { getRegByYear } from "../controller/Department/getRegByYear.js";
import { getRegByMonth } from "../controller/Department/getRegByMonth.js";

const router = express.Router();

router.get("/getRegByMonth", getRegByMonth)
router.get("/getRegByYear", getRegByYear)


export default router