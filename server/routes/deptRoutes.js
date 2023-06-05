import express from "express"
import importCSV from "../controller/Department/importCSV.js";
import db from "../db.js";
import { getRegByYear, getRegByYearByCentre } from "../controller/Department/getRegByYear.js";
import { getRegByMonth, getRegByMonthByCentre } from "../controller/Department/getRegByMonth.js";

const router = express.Router();

// !Chuyển "import-csv" -> sang tên của form frontend
// router.get("/import-csv", upload.single("import-csv"), (req, res) => {
//     return res.json('test')
// })

router.post("/test", (req, res) => {
    return res.json('test dept import CSV')
})

router.get("/getRegByMonth", getRegByMonth)
router.get("/getRegByMonthByCentre", getRegByMonthByCentre)
router.get("/getRegByYear", getRegByYear)
router.get("/getRegByYearByCentre", getRegByYearByCentre)


export default router