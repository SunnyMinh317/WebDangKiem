import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Table from "../../components/tables/Table";
import { ColumnCenterCarList } from "./ColumnCenterCarList";
import axios from "axios";

const DSXe = () => {
    
    const [backendData, setBackendData] = useState([]);

    // useEffect(() => {
    //     fetch("/ownervehicles")
    //       .then((respone) => respone.json())
    //       .then((data) => {
    //         setBackendData(data)
    //       });
    //   }, []);

      
      useEffect(()=>{
        const getAllVehicle = async ()=>{
            try {
                const respond = await axios.get("/vehicle/getAllVehicle")
                setBackendData(respond.data)
                // console.log(backendData);
            } catch(err) {
                console.log(err)
            }
        }
        getAllVehicle()
    }, [])
    
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <Table title="DANH SÁCH XE" dataLink="/vehicle/getAllVehicle" columnSet={ColumnCenterCarList}/>
            </div>
        </div>
    )
}

export default DSXe;