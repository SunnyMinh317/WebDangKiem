
let centreId = 1;

export const getCentreId = (req, res) => {
    if(req.body.centreId == null){
        console.log("No centre id");
    } else {
        centreId = req.body.centreId;   
        console.log("get id" + centreId);
    }
}

export {centreId};