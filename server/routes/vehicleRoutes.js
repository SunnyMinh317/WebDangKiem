import express from "express"
import { getAllVehicle, getAddCarForm } from "../controller/Vehicle/vehicleControl.js";
import db from "../db.js";


const router = express.Router();

router.get("/getAllVehicle", getAllVehicle)
// router.post("/postAddCarForm", postAddCarForm)
router.post("/getAddCarForm", getAddCarForm)


export default router