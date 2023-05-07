import express from "express"
import importCSV from "../controller/Department/importCSV.js";
import db from "../db.js";


const router = express.Router();
// !Chuyển "import-csv" -> sang tên của form frontend
router.post("/importCSV", upload.single("import-csv"), importCSV)


export default router