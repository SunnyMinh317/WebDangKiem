import express from "express"
import { login, register, logout } from "../controller/Centre/authentication.js";
import { getAllCentres } from "../controller/Centre/getAllCentres.js";
import { getCentreId } from "../controller/Centre/getCentreId.js";
import { getRegisCentre } from "../controller/Centre/getRegisCentre.js";
import { getRegByMonthByCentre, getRegByYearByCentre, getRegByQuarterByCentre, getStatByMonthByCentre, getStatByQuarterByCentre, getStatByYearByCentre } from "../controller/Centre/getRegCentre.js";
import { updateCentreInfo } from "../controller/Centre/updateInfo.js";
const router = express.Router();

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)
router.get("/getAllCentres", getAllCentres)
router.post("/getCentreId", getCentreId)    
router.get("/getRegisCentre", getRegisCentre)
router.get("/getRegByYearByCentre", getRegByYearByCentre)
router.get("/getRegByMonthByCentre", getRegByMonthByCentre)
router.get("/getRegByQuarterByCentre", getRegByQuarterByCentre)
router.get("/getStatByQuarterByCentre", getStatByQuarterByCentre)
router.get("/getStatByMonthByCentre", getStatByMonthByCentre)
router.get("/getStatByYearByCentre", getStatByYearByCentre)
router.post("/updateCentreInfo", updateCentreInfo)

export default router
