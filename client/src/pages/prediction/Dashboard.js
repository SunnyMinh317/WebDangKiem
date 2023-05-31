import { React, useContext, useState, useEffect } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import {
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Bar,
    Tooltip,
    Legend,
} from "recharts";
import axios from "axios";
import Chart from "../../components/Chart";
const Dashboard = () => {
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin />
            <div className={MainLayoutCSS.centerContainer}>
                <div className={MainLayoutCSS.graphContainer}>
                    <Chart/>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
