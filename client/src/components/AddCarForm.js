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
    styled,
    Icon,
} from "@mui/material";
import React, { useState, useRef } from "react";
import FormCSS from "./style/Form.module.css";
import { faUpload, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton, StyledSelect, StyledTextField } from "./StyledComponent";

const AddCarForm = () => {
    const [selectedUserType, setSelectedUserType] = useState("personal");

    const handleUserTypeChange = (event) => {
        setSelectedUserType(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
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
        console.log(selectedFile);
    };

    const autoFormatDate = (event) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
        let formattedValue = sanitizedValue;

        if (sanitizedValue.length >= 4) {
            formattedValue =
                sanitizedValue.slice(0, 4) + "/" + sanitizedValue.slice(4);
        }

        if (sanitizedValue.length >= 6) {
            formattedValue =
                sanitizedValue.slice(0, 4) +
                "/" +
                sanitizedValue.slice(4, 6) +
                "/" +
                sanitizedValue.slice(6, 8);
        }

        event.target.value = formattedValue;
    };

    return (
        <div className={FormCSS.container}>
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
                                                    <StyledTextField
                                                        required
                                                        label="Họ và tên"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
                                                        required
                                                        label="Số CCCD"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
                                                        required
                                                        label="Ngày sinh (yyyy/mm/dd)"
                                                        className={
                                                            FormCSS.textField
                                                        }
                                                        fullWidth
                                                        onChange={autoFormatDate}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
                                                        required
                                                        label="Số điện thoại"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
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
                                                    <StyledTextField
                                                        required
                                                        label="Tên doanh nghiệp"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
                                                        required
                                                        label="Họ và tên đại diện"
                                                        fullWidths
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
                                                        required
                                                        label="Ngày thành lập (yyyy/mm/dd)"
                                                        className={FormCSS.textField}
                                                        fullWidth
                                                        onChange={autoFormatDate}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
                                                        required
                                                        label="Số điện thoại"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <StyledTextField
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
                                    <StyledTextField
                                        className={FormCSS.textField}
                                        label="Biển số"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        className={FormCSS.textField}
                                        label="Hãng xe"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        className={FormCSS.textField}
                                        label="Dòng xe"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField
                                        className={FormCSS.textField}
                                        label="Ngày sản xuất (yyyy/mm/dd)"
                                        fullWidth
                                        required
                                        onChange={autoFormatDate}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField
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
                                        <StyledSelect
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
                                        </StyledSelect>
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
                        <StyledButton
                            variant="contained"
                            endIcon={
                                <Icon>
                                    <FontAwesomeIcon
                                        icon={faUserPlus}
                                        className={FormCSS.ButtonIcon}
                                    />
                                </Icon>
                            }
                        >
                            Cấp tài khoản
                        </StyledButton>
                    </Grid>
                </CardContent>
            </Card>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ marginTop: "10px", marginBottom: "5px" }}
            >
                <form action="/import-csv" onSubmit={handleSubmit}>
                    <label htmlFor="upload-excel">
                        <input
                            type="file"
                            name="upload-excel"
                            id="upload-excel"
                            accept=".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            onChange={handleFileInput}
                        />
                        <div className={FormCSS.fileUploadBtn}>
                            {" "}
                            <Button
                                variant="contained"
                                component="span"
                                endIcon={
                                    <Icon>
                                        <FontAwesomeIcon
                                            icon={faUpload}
                                            className={FormCSS.ButtonIcon}
                                        />
                                    </Icon>
                                }
                            >
                                Nhập file
                            </Button>
                            <div
                                className={FormCSS.selectedFileName}
                                id="selected-file-name"
                            ></div>
                        </div>
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
        </div>
    );
};

export default AddCarForm;
