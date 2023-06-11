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
import axios from "axios";
import { centreId } from "./LoginForm";

const AddCarForm = () => {
    const [licensePlate, setLicensePlate] = useState("");

    const handleLicensePlateChange = (event) => {
        setLicensePlate(event.target.value);
    };


    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const getData = async () => {
        try {
            const res = await axios.post("/vehicle/getAddCarForm", {
                licensePlate: licensePlate,
            });
            setData(res.data);
            console.log(data[0].licensePlate);
        } catch (err) {
            setError(true);
            console.error(err);
        }
    };

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
                        {error && (
                            <Grid item xs={6}>
                                <div className={FormCSS.errorBox}>
                                    Biển số xe không tồn tại
                                </div>
                            </Grid>
                        )}

                        <Grid item xs={6} sm={12}>
                            <StyledTextField
                                label="Biển số"
                                onChange={handleLicensePlateChange}
                            />
                        </Grid>
                        <Grid item xs={6} sm={12}>
                            <StyledButton onClick={getData}>
                                LẤY THÔNG TIN
                            </StyledButton>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {" "}
                            <StyledTextField
                                label="Hãng xe"
                                value={data ? data[0].brand : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="Dòng xe"
                                value={data ? data[0].model : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="Mục đích sử dụng"
                                value={data ? data[0].usePurpose : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="Ngày sản xuất"
                                value={data ? data[0].manufactureDate : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="Ngày đăng kiểm"
                                value={data ? data[0].registrationDate : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="Ngày hết hạn"
                                value={data ? data[0].expireDate : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br />
            <Card className={FormCSS.formContainer}>
                <CardContent>
                    <Grid item xs={12}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            className={FormCSS.title}
                        >
                            THÔNG TIN CHỦ SỞ HỮU
                        </Typography>
                    </Grid>
                    {data ? (
                        data[0].isCompany ? (
                            <Grid container spacing={2}>
                                <Grid item sm={4} xs={12}>
                                    {" "}
                                    <StyledTextField
                                        label="Loại xe"
                                        value={
                                            data
                                                ? data[0].isCompany
                                                    ? "Doanh nghiệp"
                                                    : "Cá nhân"
                                                : ""
                                        }
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    {" "}
                                    <StyledTextField
                                        label="Tên doanh nghiệp"
                                        value={data[0].NAME}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <StyledTextField
                                        label="Đại diện"
                                        value={data[0].representative}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <StyledTextField
                                        label="Số CCCD"
                                        value={data[0].ownerId}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <StyledTextField
                                        label="Địa chỉ"
                                        value={data[0].address}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <StyledTextField
                                        label="Liên lạc"
                                        value={data[0].phone}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container spacing={2}>
                                <Grid item sm={4} xs={12}>
                                    {" "}
                                    <StyledTextField
                                        label="Loại xe"
                                        value={
                                            data
                                                ? data[0].isCompany
                                                    ? "Doanh nghiệp"
                                                    : "Cá nhân"
                                                : ""
                                        }
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    {" "}
                                    <StyledTextField
                                        label="Họ và tên"
                                        value={data[0].NAME}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <StyledTextField
                                        label="Số CCCD"
                                        value={data[0].ownerId}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <StyledTextField
                                        label="Địa chỉ"
                                        value={data[0].address}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <StyledTextField
                                        label="Liên lạc"
                                        value={data[0].phone}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        )
                    ) : (
                        <Grid container spacing={2}>
                            <Grid item sm={4} xs={12}>
                                {" "}
                                <StyledTextField
                                    label="Loại xe"
                                    value=""
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                {" "}
                                <StyledTextField
                                    label="Tên doanh nghiệp"
                                    value=""
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <StyledTextField
                                    label="Đại diện"
                                    value=""
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <StyledTextField
                                    label="Số CCCD"
                                    value=""
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <StyledTextField
                                    label="Địa chỉ"
                                    value=""
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <StyledTextField
                                    label="Liên lạc"
                                    value=""
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    )}
                </CardContent>
            </Card>
            <br />

            <Card className={FormCSS.formContainer}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                className={FormCSS.title}
                            >
                                THÔNG TIN ĐĂNG KIỂM
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            {" "}
                            <StyledTextField
                                label="Trung tâm đăng kiểm"
                                value={data ? data[0].centreName : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                label="Thành phố"
                                value={data ? data[0].centreCity : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                label="Quận"
                                value={data ? data[0].centreDistrict : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="ID"
                                value={data ? data[0].manufactureDate : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="Ngày đăng kiểm"
                                value={data ? data[0].registrationDate : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                label="Ngày hết hạn"
                                value={data ? data[0].expireDate : ""}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledButton>ĐĂNG KIỂM</StyledButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
// =======
//   const getData = async () => {
//     const res = await axios.post("/vehicle/getAddCarForm", {licensePlate: licensePlate, centreId: centreId});
//     console.log(res.data);
//     return res.data;
 
};

export default AddCarForm;
