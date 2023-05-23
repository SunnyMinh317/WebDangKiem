import React from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenterCarList } from "../../components/Columns";
import { useState, useEffect } from "react";
import axios from "axios";

const CenterDSXe = () => {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        const getAllVehicle = async () => {
            try {
                const respond = await axios.get("/vehicle/getAllVehicle");
                setBackendData(respond.data);
                // console.log(backendData);
            } catch (err) {
                console.log(err);
            }
        };
        getAllVehicle();
    }, []);

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