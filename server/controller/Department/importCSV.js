import db from "./db.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from "multer";
import path from "path";
import csvtojson from "csvtojson"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, __dirname + '/uploads/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})
 
var upload = multer({
    storage: storage
});


export default function importCSV(req, res){
    console.log(req.file.filename)
    tranferCSV(req.file.filename)
    res.status(200).json("Upload ok")
}

function tranferCSV(pathToFile) {
    csvtojson().fromFile(__dirname +`/${pathToFile}`).then(source => {
  
        // Fetching the data from each row 
        // and inserting to the table "sample"
        for (var i = 0; i < source.length; i++) {
            var 
            ownerId = source[i]["ownerId"],      //for owner
            dob = source[i]["dob"],
            name = source[i]["name"],
            address = source[i]["address"],
            phone = source[i]["phone"],     //for ownervehicle
            licensePlate = source[i]["licensePlate"],
            startDate = source[i]["startDate"],
            endDate = source[i]["endDate"],
            brand = source[i]["brand"],     //for vehicle
            model = source[i]["model"],
            manufactureDate = source[i]["manufactureDate"],
            certId = source[i]["certId"],
            certDate = source[i]["certDate"],
            regionId = source[i]["regionId"],
            version = source[i]["version"],
            usePurpose = source[i]["usePurpose"],
            isCompany = source[i]["isCompany"],
            representative = source[i]["representative"]
            
      
            //! Add data in vehicle table
            var insertVehicles = 
            "INSERT INTO vehicles (`licensePlate`, `brand`, `model`, `manufactureDate`, `certId`, `certDate`, `regionId`, `version`, `usePurpose`, `isCompany`) VALUES (?)";
            var vehicleItems = [licensePlate, brand, model, manufactureDate, certId, certDate, regionId, version, usePurpose, isCompany];
            
            db.query(insertVehicles, [vehicleItems], 
                (err, results, fields) => {
                if (err) {
                    console.log("Unable to insert users item at row ", i + 1);
                    return console.log(err);
                }
                console.log("Add vehicles successfully");
            });

            //!add vehicle for personal owners
            if (isCompany == 0) {
                //!owner table
                var insertOwners = "INSERT INTO `owner` (`ownerId`,`dob`, `name`, `address`, `phone`) VALUES (?)";
                var ownerItems = [ownerId, dob, name, address, phone];
               
                db.query( insertOwners, [ownerItems], 
                    (err, results, fields) => {
                    if (err) {
                        console.log("Unable to insert users item at row ", i + 1);
                        return console.log(err);
                    }
                    console.log("Add owners successfully");
                });
                //!ownervehicle table
                var insertOwnerVehivle = "INSERT INTO `ownervehicle` (`ownerId`,`licensePlate`, `startDate`) VALUES (?)";
                var ownerVehicleItems = [ownerId, licensePlate, startDate];

                db.query( insertOwnerVehivle, [ownerVehicleItems], 
                    (err, results, fields) => {
                    if (err) {
                        console.log("Unable to insert users item at row ", i + 1);
                        return console.log(err);
                    }
                    console.log("Add ownervehicles successfully");
                });
            } 
            //!add vehicle for company owners
            else if (isCompany == 1) {
                //!company table
                var insertCompanys = "INSERT INTO `company` (`ownerId`,`dob`, `name`,`representative`, `address`, `phone`) VALUES (?)";
                var companyItems = [ownerId, dob, name, representative, address, phone];

                db.query( insertCompanys, [companyItems], 
                    (err, results, fields) => {
                    if (err) {
                        console.log("Unable to insert users item at row ", i + 1);
                        return console.log(err);
                    }
                    console.log("Add company successfully");
                });
                //!companyvehicle table
                var insertCompanyVehivle = "INSERT INTO `companyvehicle` (`ownerId`,`licensePlate`, `startDate`) VALUES (?)";
                var companyVehicleItems = [ownerId, licensePlate, startDate];

                db.query( insertCompanyVehivle, [companyVehicleItems], 
                    (err, results, fields) => {
                    if (err) {
                        console.log("Unable to insert users item at row ", i + 1);
                        return console.log(err);
                    }
                    console.log("Add companyvehicles successfully");
                });
            }


        }
        console.log("All items stored into database successfully");
    });
}
