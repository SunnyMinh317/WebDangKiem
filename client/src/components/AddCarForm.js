import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
    Typography,
    Divider,
    FormControl,
    FormGroup,
    RadioGroup,
    Radio,
    FormControlLabel,
    Select,
    MenuItem,
    InputLabel,
    Box,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useRef } from "react";
import FormCSS from "./style/Form.module.css";
import { faUpload, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0E8388", // your custom primary color
        },
        secondary: {
            main: "#2E4F4F", // your custom secondary color
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff5ee",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        backgroundColor: "transparent",
                    },
                    MuiOutlinedInput: {
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ffa500", // your custom hover border color
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff5ee",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        backgroundColor: "transparent",
                    },
                    MuiOutlinedInput: {
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ffa500", // your custom hover border color
                        },
                    },
                },
            },
        },
    },
});

const AddCarForm = () => {
    const [selectedUserType, setSelectedUserType] = useState("personal");

    const handleUserTypeChange = (event) => {
        setSelectedUserType(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Selected file:", file);
    };

    const inputRef = useRef(null);

    const handleButtonClick = () => {
        inputRef.current.click();
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(file.name);
        const fileName = file.name;
        document.getElementById("selected-file-name").innerText = fileName;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(selectedFile);
        const formData = new FormData()
        formData.append('import-csv', selectedFile)

        axios.post("/csv/import-csv", formData, {
        }).then(res => {
            console.log(res)

        }).catch(err => console.log(err))
    };

    return (
        <div className={FormCSS.container}>
            <ThemeProvider theme={theme}>
                <Card className={FormCSS.formContainer}>
                    <CardContent>
                        <Grid container spacing={10}>
                            <Grid item xs={12} sm={6}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    className={FormCSS.title}
                                >
                                    Thông tin chủ sở hữu
                                </Typography>
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        value={selectedUserType}
                                        onChange={handleUserTypeChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value="personal"
                                            control={<Radio />}
                                            label="Cá nhân"
                                        />
                                        <FormControlLabel
                                            value="company"
                                            control={<Radio />}
                                            label="Doanh nghiệp"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                {selectedUserType === "personal" && (
                                    <Grid item xs={12}>
                                        <FormControl>
                                            <FormGroup>
                                                <Grid container spacing={1.5}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Họ và tên"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Số CCCD"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Ngày sinh (yyyy/mm/dd)"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Số điện thoại"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Quê quán"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </FormGroup>
                                        </FormControl>
                                    </Grid>
                                )}
                                {selectedUserType === "company" && (
                                    <Grid item xs={12}>
                                        <FormControl>
                                            <FormGroup>
                                                <Grid container spacing={1.5}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Tên doanh nghiệp"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Họ và tên đại diện"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Ngày thành lập (yyyy/mm/dd)"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Số điện thoại"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            label="Thành phố/tỉnh trụ sở chính"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </FormGroup>
                                        </FormControl>
                                    </Grid>
                                )}
                                {/* </Grid> */}
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    className={FormCSS.title}
                                >
                                    Thông tin xe
                                </Typography>
                                <Grid container spacing={1.5}>
                                    <Grid item xs={12}>
                                        <TextField
                                            className={FormCSS.textField}
                                            label="Biển số"
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={FormCSS.textField}
                                            label="Hãng xe"
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={FormCSS.textField}
                                            label="Dòng xe"
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            className={FormCSS.textField}
                                            label="Ngày sản xuất (yyyy/mm/dd)"
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            className={FormCSS.textField}
                                            label="Mã thành phố"
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                Mục đích sử dụng
                                            </InputLabel>
                                            <Select
                                                labelId="select-label"
                                                id="select"
                                                label="Mục đích sử dụng"
                                                value={selectedOption}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="Chuyển hàng">
                                                    Chuyển hàng
                                                </MenuItem>
                                                <MenuItem value="Công vụ">
                                                    Công vụ
                                                </MenuItem>
                                                <MenuItem value="Du lịch">
                                                    Du lịch
                                                </MenuItem>
                                                <MenuItem value="Kinh doanh">
                                                    Kinh doanh
                                                </MenuItem>
                                                <MenuItem value="Đi học">
                                                    Đi học
                                                </MenuItem>
                                                <MenuItem value="Đi làm">
                                                    Đi làm
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ marginTop: "10px" }}
                        >
                            <Button variant="contained">Cấp tài khoản<FontAwesomeIcon icon={faUserPlus} className={FormCSS.ButtonIcon} /></Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginTop: "10px", marginBottom:"5px" }}
                >
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="upload-excel">
                            <input
                                type="file"
                                name="import-csv"
                                id="upload-excel"
                                accept=".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                onChange={handleFileInput}
                            />
                            <Button variant="contained" component="span">
                                Nhập file
                                <FontAwesomeIcon
                                    icon={faUpload}
                                    className={FormCSS.ButtonIcon}
                                />
                            </Button>
                            <div id="selected-file-name"></div>
                        </label>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ marginTop: "10px", marginBottom: "5px" }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={!selectedFile}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </ThemeProvider>
        </div>
    );
};

export default AddCarForm;
