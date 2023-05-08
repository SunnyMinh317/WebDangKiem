import React from "react";
import HeaderCenter from "../../components/HeaderCenter";
import AddCarForm from "../../components/AddCarForm";
import MainLayoutCSS from "../style/MainLayout.module.css";

const AddCar = () => {
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