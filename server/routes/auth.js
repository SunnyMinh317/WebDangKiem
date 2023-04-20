import express from "express"
import { login } from "../controller/authControl.js";
import db from "../db.js";

const router = express.Router();

router.post("/login", login)

export default router
