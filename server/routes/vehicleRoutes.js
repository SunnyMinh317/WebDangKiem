import express from "express"
import { getAllVehicle, postAddCarForm, getAddCarForm } from "../controller/Vehicle/vehicleControl.js";
import db from "../db.js";


const router = express.Router();

router.get("/getAllVehicle", getAllVehicle)
router.post("/postAddCarForm", postAddCarForm)
router.get("/getAddCarForm", getAddCarForm)


export default router