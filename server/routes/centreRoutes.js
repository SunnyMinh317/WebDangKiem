import express from "express"
import { login, register, logout } from "../controller/Centre/authentication.js";
import { getAllCentres } from "../controller/Centre/getAllCentres.js";
import { getCentreId } from "../controller/Centre/getCentreId.js";
import { getRegisCentre } from "../controller/Centre/getRegisCentre.js";

const router = express.Router();

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)
router.get("/getAllCentres", getAllCentres)
router.post("/getCentreId", getCentreId)    
router.get("/getRegisCentre", getRegisCentre)

export default router
