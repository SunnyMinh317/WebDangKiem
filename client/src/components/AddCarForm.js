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
    return (
        <div className={FormCSS.container}>
            <Card className={FormCSS.formContainer}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                className={FormCSS.title}
                            >
                                THÔNG TIN XE
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={12}>
                            <StyledTextField
                                id="outlined-read-only-input"
                                label="Biển số"
                                defaultValue={"Filler Data Filler Filler"}
                            />
                        </Grid>
                        <Grid item xs={6} sm={12}>
                            <StyledButton ></StyledButton>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {" "}
                            <StyledTextField
                                id="outlined-read-only-input"
                                label="Hãng xe"
                                defaultValue={"Filler Data Filler Filler"}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                id="outlined-read-only-input"
                                label="Dòng xe"
                                defaultValue={"Filler Data Filler Filler"}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                id="outlined-read-only-input"
                                label="Ngày sản xuất"
                                defaultValue={"Filler Data Filler Filler"}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                id="outlined-read-only-input"
                                label="Ngày đăng kiểm"
                                defaultValue={"Filler Data Filler Filler"}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                id="outlined-read-only-input"
                                label="Ngày hết hạn"
                                defaultValue={"Filler Data Filler Filler"}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                id="outlined-read-only-input"
                                label="Mục đích sử dụng"
                                defaultValue={"Filler Data Filler Filler"}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                className={FormCSS.title}
                            >
                                THÔNG TIN CHỦ SỞ HỮU
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        className={FormCSS.title}
                                    >
                                        XE DOANH NGHIỆP
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    {" "}
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Tên doanh nghiệp"
                                        defaultValue={"data.NAME"}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Đại diện"
                                        defaultValue={"data.representative"}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Số CCCD"
                                        defaultValue={"data.ownerId"}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Địa chỉ"
                                        defaultValue={"data.address"}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Liên lạc"
                                        defaultValue={"data.phone"}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddCarForm;
