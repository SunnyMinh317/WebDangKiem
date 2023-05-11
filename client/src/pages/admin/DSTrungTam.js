import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";

const DSTrungTam = () => {
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <Table title="DANH SÁCH TRUNG TÂM" dataLink="/centre/getAllCentres"/>
            </div>
        </div>
    )
}

export default DSTrungTam;