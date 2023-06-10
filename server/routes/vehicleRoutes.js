import express from "express"
import { getAllVehicle,getAddCarForm, getAllVehicleByCentre } from "../controller/Vehicle/vehicleControl.js";
import db from "../db.js";


const router = express.Router();

router.get("/getAllVehicle", getAllVehicle)
router.post("/getAddCarForm", getAddCarForm)
router.get("/getAllVehicleByCentre", getAllVehicleByCentre)



export default router