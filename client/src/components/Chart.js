import { React, useContext, useState, useEffect } from "react";
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
import ChartCSS from "../components/style/Chart.module.css";
const Chart = () => {
    const [loading, setLoading] = useState(true);
    const [UserDataSet, setUserDataSet] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            try {
                const response = await axios.get("/dept/getRegByYear");
                setUserDataSet(response.data);
            } catch (error) {
                console.error(error.message);
            }
            // setLoading(false);
        };

        fetchData();
    }, []);

    console.log(UserDataSet);
    return (
        <div className={ChartCSS.container}>
            <strong className={ChartCSS.title}>BIỂU ĐỒ DỰ ĐOÁN</strong>
            <ResponsiveContainer width="90%" height={500}>
                <BarChart
                    width={300}
                    height={500}
                    data={UserDataSet}
                    margin={{
                        top: 20,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                    <XAxis dataKey="year" tick={{fontFamily:"titi", fontSize:"smaller"}}/>
                    <YAxis tick={{fontFamily:"titi", fontSize:"smaller"}}/>
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="new_reg_count"
                        name="Xe sắp đăng kiểm"
                        fill="var(--dark)"
                    />
                    <Bar dataKey="expire_count" name="Xe hết hạn" fill="var(--sec-dark)"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Chart;
