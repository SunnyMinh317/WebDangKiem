import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenterCarList } from "../center/ColumnCenterCarList";
import axios from "axios";

const DSXe = () => {
       
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <Table title="DANH SÁCH XE" dataLink="/vehicle/getAllVehicle" columnSet={ColumnCenterCarList}/>
            </div>
        </div>
    )
}

export default DSXe;
