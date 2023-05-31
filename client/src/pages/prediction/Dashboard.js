import {React, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Chart from "./Chart";
const Dashboard = () => {
    return (
            <div className={MainLayoutCSS.container}>
                <HeaderAdmin className={MainLayoutCSS.header}/>
                <div className={MainLayoutCSS.contentWrap}>
                {/* <CardBar title="Activity" chart={<BarChart />} /> */}
                <Chart />
                </div>
            </div>
    )
}
export default Dashboard;
