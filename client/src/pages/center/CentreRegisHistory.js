import {React, useContext, useEffect}  from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import LoginPopup from "../../components/LoginPopup";
import { AuthContext } from "../../context/authContext";
import { ColumnCenterRegis } from "../../components/Columns";
import axios from "axios";

const CentreRegisHistory = () => {
    const { currentUser } = useContext(AuthContext);

    // useEffect( async () => {
    //         axios.("/centre/getCentreId");
    // }, []); 

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
            {!(currentUser) ? (
                    <LoginPopup/>
                ) : (
                <Table
                    externalButtons={true}
                    title="LỊCH SỬ ĐĂNG KIỂM"
                    dataLink="/centre/getRegisCentre"
                    columnSet={ColumnCenterRegis}
                />
            )}
            </div>
        </div>
    );
};

export default CentreRegisHistory;
