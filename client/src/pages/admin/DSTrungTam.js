import React, { useState, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenter } from "../../components/Columns";
import LoginPopup from "../../components/LoginPopup";
import { AuthContext } from "../../context/authContext";

const DSTrungTam = () => {
    const [backendData, setBackendData] = useState([]);
    const { currentUser } = useContext(AuthContext);
    
    
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
            {!(currentUser) ? (
                    <LoginPopup/>
                ) : (
                <Table
                    externalButtons={true}
                    title="DANH SÁCH TRUNG TÂM"
                    dataLink="/centre/getAllCentres"
                    columnSet={ColumnCenter}
                    rowID="centreID"
                />
                )}
            </div>
        </div>
    );
};

export default DSTrungTam;
