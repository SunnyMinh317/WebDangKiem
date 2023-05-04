import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenterCarList } from "./ColumnCenterCarList";

const DSXe = () => {
    
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/ownervehicles")
          .then((respone) => respone.json())
          .then((data) => {
            setBackendData(data)
          });
      }, []);

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <Table title="DANH SÁCH XE" dataLink="mock_full_data.json" columnSet={ColumnCenterCarList}/>
            </div>
        </div>
    )
}

export default DSXe;