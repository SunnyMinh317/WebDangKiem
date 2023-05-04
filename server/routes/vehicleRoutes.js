import express from "express"
import { getAllVehicle } from "../controller/vehicleControl.js";
import db from "../db.js";


const router = express.Router();

router.get("/getAllVehicle", getAllVehicle)


export default router