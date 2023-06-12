import {React, useContext} from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import AccountGenForm from "../../components/AccountGenForm";
import MainLayoutCSS from "../style/MainLayout.module.css";
import { AuthContext } from "../../context/authContext";
import LoginPopup from "../../components/LoginPopup";

const CapTaiKhoan = () => {
    const { currentUser } = useContext(AuthContext);

    if(!currentUser){
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