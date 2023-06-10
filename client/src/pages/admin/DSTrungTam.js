import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenter } from "../../components/Columns";
import axios from "axios";
import { ColumnCenterList } from "./ColumnCentreList";

const DSTrungTam = () => {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        const getAllVehicle = async () => {
            try {
                const respond = await axios.get("/centre/getAllCentres");
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
            <HeaderAdmin className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
                <Table
                    externalButtons={true}
                    title="DANH SÁCH TRUNG TÂM"
                    dataLink="/centre/getAllCentres"
                    columnSet={ColumnCenter}
                    rowID="centreID"
                />
            </div>
        </div>
    );
};

export default DSTrungTam;
