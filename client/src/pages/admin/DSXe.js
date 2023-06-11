import { React, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCarList } from "../../components/Columns";
import { AuthContext } from "../../context/authContext";
import PopUp from "../../components/tables/PopUp";
import LoginPopup from "../../components/LoginPopup";

const DSXe = () => {
    const { currentUser } = useContext(AuthContext);
    // if(currentUser.isAdmin == 1) {
    //     console.log("dit me")
    // }
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
                {!(currentUser) ? (
                    <LoginPopup/>
                ) : (
                    <Table
                        externalButtons={false}
                        title="DANH SÁCH XE"
                        dataLink="/vehicle/getAllVehicle"
                        columnSet={ColumnCarList}
                        rowID="licensePlate"
                    />
                )}
            </div>
        </div>
    );
};

export default DSXe;
