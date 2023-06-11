import {React, useContext}  from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import LoginPopup from "../../components/LoginPopup";
import { AuthContext } from "../../context/authContext";
import { ColumnCenterCarList } from "../../components/Columns";

const CenterDSXe = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
            {!(currentUser) ? (
                    <LoginPopup/>
                ) : (
                <Table
                    externalButtons={true}
                    title="DANH SÁCH XE"
                    dataLink="/vehicle/getAllVehicle"
                    columnSet={ColumnCenterCarList}
                />
            )}
            </div>
        </div>
    );
};

export default CenterDSXe;
