import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import Footer from "../../components/Footer";
import MainLayoutCSS from "../style/MainLayout.module.css";
import DSXeCSS from "../style/DSXe.module.css";
import CarList from "../../components/tables/cuc_table/car_list/CarList";

const DSXe = () => {
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <CarList/>
            </div>
        </div>
    )
}

export default DSXe;