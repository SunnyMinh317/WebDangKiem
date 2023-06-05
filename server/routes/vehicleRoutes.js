import express from "express"
import { getAllVehicle, getAllVehicleByCentre } from "../controller/Vehicle/vehicleControl.js";
import db from "../db.js";


const router = express.Router();

router.get("/getAllVehicle", getAllVehicle)
router.get("/getAllVehicleByCentre", getAllVehicleByCentre)



export default router