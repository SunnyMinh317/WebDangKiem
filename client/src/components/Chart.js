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
import {
    RadioGroup,
    FormControlLabel,
    FormControl,
    Radio,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
const Chart = ({ isAdmin }) => {
    const [chartType, setChartType] = useState("predict");
    const [dateType, setDateType] = useState("year");
    const [UserDataSet, setUserDataSet] = useState([]);
    const [citySet, setCitySet] = useState([]);
    const [city, setCity] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (chartType === "predict") {
                    if (dateType === "month") {
                        response = await axios.get("/dept/getRegByMonth");
                    } else if (dateType === "quart") {
                        response = await axios.get("/dept/getRegByQuarter");
                    } else if (dateType === "year") {
                        response = await axios.get("/dept/getRegByYear");
                    }
                } else if (chartType === "stat") {
                    if (dateType === "month") {
                        response = await axios.get("/dept/getStatByMonth");
                    } else if (dateType === "quart") {
                        response = await axios.get("/dept/getStatByQuarter");
                    } else if (dateType === "year") {
                        response = await axios.get("/dept/getStatByYear");
                    }
                }

                setUserDataSet(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, [chartType, dateType]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/getCity");
                setCitySet(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    });

    const handleTypeChange = (event) => {
        setChartType(event.target.value);
    };

    const handleDateChange = (event) => {
        setDateType(event.target.value);
        // console.log(chartType + " " + dateType);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
        console.log(city);
    }

    return (
        <div className={ChartCSS.container}>
            <div className={ChartCSS.titleCont}>
                <strong className={ChartCSS.title}>
                    {chartType === "predict"
                        ? "Biểu đồ dự đoán"
                        : "Biểu đồ thống kê"}
                </strong>
                <div className={ChartCSS.typeInput}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="predict"
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
                <div className={ChartCSS.dateInput}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="year"
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
                {isAdmin && (
                    <div className={ChartCSS.citySelect}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Chọn khu vực
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Khu vực"
                                onChange={handleCityChange}
                            >
                                <MenuItem value='Toàn quốc'>Toàn quốc</MenuItem>
                                <MenuItem value='Hà Nội'>Hà Nội</MenuItem>
                                <MenuItem value='TP. Hồ Chí Minh'>
                                    TP. Hồ Chí Minh
                                </MenuItem>
                                <MenuItem value='TP. Đà Nẵng'>
                                    TP. Đà Nẵng
                                </MenuItem>
                                <MenuItem value='Long An'>Long An</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )}
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
                        dataKey={
                            dateType === "year"
                                ? "year"
                                : dateType === "month"
                                ? "month"
                                : "quarter"
                        }
                        tick={{ fontFamily: "titi", fontSize: "smaller" }}
                    />
                    <YAxis tick={{ fontFamily: "titi", fontSize: "smaller" }} />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="new_reg_count"
                        name="Xe sắp đăng kiểm"
                        fill="var(--orange)"
                    />
                    <Bar
                        dataKey="expire_count"
                        name="Xe hết hạn"
                        fill="var(--dark-orange)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Chart;
