import express from "express"
import { login, register, logout } from "../controller/Centre/authentication.js";
import { getAllCentres } from "../controller/Centre/getAllCentres.js";

const router = express.Router();

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)
router.get("/getAllCentres", getAllCentres)

export default router
