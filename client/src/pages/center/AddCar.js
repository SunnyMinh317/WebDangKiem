import React from "react";
import HeaderCenter from "../../components/HeaderCenter";
import AccountGenForm from "../../components/AccountGenForm";
import MainLayoutCSS from "../style/MainLayout.module.css";

const AddCar = () => {
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <AccountGenForm/>
            </div>
        </div>
    )
}

export default AddCar;