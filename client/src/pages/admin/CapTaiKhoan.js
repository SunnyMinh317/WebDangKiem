import {React, useContext, useState} from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import AccountGenForm from "../../components/AccountGenForm";
import MainLayoutCSS from "../style/MainLayout.module.css";
import { AuthContext } from "../../context/authContext";
import LoginPopup from "../../components/LoginPopup";
import FormCSS from "../../components/style/Form.module.css";


const CapTaiKhoan = () => {
    const { currentUser } = useContext(AuthContext);


    if(!currentUser || currentUser.isAdmin != 1){
        return (
            <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <LoginPopup/>
            </div>
        </div>
        )
    }

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <AccountGenForm/>
            </div>
            
        </div>
    )
}

export default CapTaiKhoan;