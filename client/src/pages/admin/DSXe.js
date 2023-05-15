import React, { useEffect, useState, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenterCarList } from "../center/ColumnCenterCarList";
import { AuthContext } from "../../context/authContext";

const DSXe = () => {
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser);
    return (
            <div className={MainLayoutCSS.container}>
                <HeaderAdmin className={MainLayoutCSS.header}/>
                <div className={MainLayoutCSS.contentWrap}>
                {!currentUser ? 
                    <div>DIT CU DANG NHAP</div> 
                    :
                    <Table title="DANH SÁCH XE" dataLink="/vehicle/getAllVehicle" columnSet={ColumnCenterCarList}/>
                }
                </div>
            </div>
    )
}

export default DSXe;
