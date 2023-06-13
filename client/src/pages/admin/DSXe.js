import { React, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCarList } from "../../components/Columns";
import { AuthContext } from "../../context/authContext";
import LoginPopup from "../../components/LoginPopup";

const DSXe = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser || currentUser.isAdmin != 1) {
        return (
            <div className={MainLayoutCSS.container}>
                <HeaderAdmin className={MainLayoutCSS.header} />
                <div className={MainLayoutCSS.contentWrap}>
                    <LoginPopup />
                </div>
            </div>
        );
    }

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
                <Table
                    hasExtraCol={true}
                    externalButtons={true}
                    title="DANH SÁCH XE"
                    dataLink="/vehicle/getAllVehicle"
                    columnSet={ColumnCarList}
                    rowID="licensePlate"
                />
            </div>
        </div>
    );
};

export default DSXe;
