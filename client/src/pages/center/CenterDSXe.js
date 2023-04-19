import React from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";

const CenterDSXe = () => {
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <Table title="DANH SÁCH XE" dataLink="./MOCK_DATA.json"/>
            </div>
        </div>
    )
}

export default CenterDSXe;