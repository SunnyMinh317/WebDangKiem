import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import AccountGenForm from "../../components/AccountGenForm";
import MainLayoutCSS from "../style/MainLayout.module.css";

const CapTaiKhoan = () => {
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