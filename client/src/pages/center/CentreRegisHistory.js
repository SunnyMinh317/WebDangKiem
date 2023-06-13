import { React, useContext, useEffect } from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import LoginPopup from "../../components/LoginPopup";
import { AuthContext } from "../../context/authContext";
import { ColumnCenterRegis } from "../../components/Columns";
import axios from "axios";

const CentreRegisHistory = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser || currentUser.isAdmin != 0) {
        return (
            <div className={MainLayoutCSS.container}>
                <HeaderCenter className={MainLayoutCSS.header} />
                <div className={MainLayoutCSS.contentWrap}>
                    <LoginPopup />
                </div>
            </div>
        );
    }

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
                <Table
                    hasExtraCol={true}
                    externalButtons={true}
                    title="LỊCH SỬ ĐĂNG KIỂM"
                    dataLink="/centre/getRegisCentre"
                    columnSet={ColumnCenterRegis}
                />
            </div>
        </div>
    );
};

export default CentreRegisHistory;
