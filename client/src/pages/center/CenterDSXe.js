import React from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenterCarList } from "./ColumnCenterCarList.js";

const CenterDSXe = () => {
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <Table externalButtons={true} title="DANH SÁCH XE" dataLink="/vehicle/getAllVehicle" columnSet={ColumnCenterCarList}/>
            </div>
        </div>
    )
}

export default CenterDSXe;