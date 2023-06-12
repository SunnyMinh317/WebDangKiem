import {React, useContext} from "react";
import HeaderCenter from "../../components/HeaderCenter";
import AddCarForm from "../../components/AddCarForm";
import MainLayoutCSS from "../style/MainLayout.module.css";
import LoginPopup from "../../components/LoginPopup";
import { AuthContext } from "../../context/authContext";

const AddCar = () => {
    const { currentUser } = useContext(AuthContext);

    if(!currentUser || currentUser.isAdmin != 0){
        return (
            <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <LoginPopup/>
            </div>
        </div>
        )
    }
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <AddCarForm/>
            </div>
        </div>
    )
}

export default AddCar;