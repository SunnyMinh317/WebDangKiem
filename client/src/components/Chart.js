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
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
const Chart = () => {
    const [chartType, setChartType] = useState("");
    const [dateType, setDateType] = useState("");
    const handleTypeChange = (event) => {
        setChartType(event.target.value);
    };

    const handleDateChange = (event) => {
        setDateType(event.target.value);
        // console.log(chartType + " " + dateType);
    };

    const [UserDataSet, setUserDataSet] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get("/dept/getRegByMonth");
            try {
                response = await axios.get("/dept/getRegByQuarter");
                console.log("quart");
                setUserDataSet(response.data);
                
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={ChartCSS.container}>
            <div className={ChartCSS.titleCont}>
                <strong className={ChartCSS.title}>
                    {chartType === "predict"
                        ? "Biểu đồ dự đoán"
                        : "Biểu đồ thống kê"}
                </strong>
                <div className={ChartCSS.dateInput}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={handleTypeChange}
                    >
                        <FormControlLabel
                            value="stat"
                            control={<Radio />}
                            label="Thống kê"
                        />
                        <FormControlLabel
                            value="predict"
                            control={<Radio />}
                            label="Dự đoán"
                        />
                    </RadioGroup>
                </div>
                <div className={ChartCSS.typeInput}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="month"
                        name="radio-buttons-group"
                        onChange={handleDateChange}
                    >
                        <FormControlLabel
                            value="month"
                            control={<Radio />}
                            label="Tháng"
                        />
                        <FormControlLabel
                            value="quart"
                            control={<Radio />}
                            label="Quý"
                        />
                        <FormControlLabel
                            value="year"
                            control={<Radio />}
                            label="Năm"
                        />
                    </RadioGroup>
                </div>
            </div>
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
                    <XAxis
                        dataKey="year"
                        tick={{ fontFamily: "titi", fontSize: "smaller" }}
                    />
                    <YAxis tick={{ fontFamily: "titi", fontSize: "smaller" }} />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="new_reg_count"
                        name="Xe sắp đăng kiểm"
                        fill="var(--dark)"
                    />
                    <Bar
                        dataKey="expire_count"
                        name="Xe hết hạn"
                        fill="var(--sec-dark)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Chart;
