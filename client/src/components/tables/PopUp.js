import React from "react";
import PopUpCSS from "../style/PopUp.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Tab, Grid, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { TextField } from "@mui/material";
import { StyledTextField } from "../StyledComponent";
import FormCSS from "../style/Form.module.css";

const PopUp = ({ isOpen, closeModal, data, columns }) => {
    const [value, setValue] = useState("1");
    if (!isOpen) {
        return null;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // console.log(data);

    return (
        <div className={PopUpCSS.container}>
            <div className={PopUpCSS.content}>
                <div className={PopUpCSS.closeBtnContainer}>
                    <button onClick={closeModal} className={PopUpCSS.closeBtn}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className={PopUpCSS.closeBtnIcon}
                        />
                    </button>
                </div>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            aria-label="Example"
                            onChange={handleChange}
                            className={PopUpCSS.tabList}
                            TabIndicatorProps={{
                                sx: { backgroundColor: "var(--dark)" },
                            }}
                            sx={{
                                color: "var(--dark)",
                                "& button": {
                                    fontFamily: "titi",
                                    color: "var(--dark)",
                                    transition: "0.2s",
                                },
                                "& button:hover": {
                                    backgroundColor: "var(--fourth-dark)",
                                },
                                "& button:focus": {
                                    color: "var(--dark)",
                                },
                                "& button.Mui-selected": {
                                    color: "var(--dark)",
                                },
                            }}
                        >
                            <Tab label="Thông tin xe" value="1" />
                            <Tab label="Thông tin chủ sở hữu" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className={PopUpCSS.carInfoContainer}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Biển số"
                                        defaultValue={data.licensePlate}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {" "}
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Hãng xe"
                                        defaultValue={data.brand}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Dòng xe"
                                        defaultValue={data.model}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Ngày sản xuất"
                                        defaultValue={data.manufactureDate}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Ngày đăng kiểm"
                                        defaultValue={data.registrationDate}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Ngày hết hạn"
                                        defaultValue={data.expireDate}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Mục đích sử dụng"
                                        defaultValue={data.usePurpose}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Trung tâm đăng kiểm"
                                        defaultValue={data.centreName}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        {data.isCompany === 1 ? (
                            <Grid container spacing={2}>
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
                                        defaultValue={data.NAME}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Đại diện"
                                        defaultValue={data.representative}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Số CCCD"
                                        defaultValue={data.ownerId}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Địa chỉ"
                                        defaultValue={data.address}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Liên lạc"
                                        defaultValue={data.phone}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        className={FormCSS.title}
                                    >
                                        XE CÁ NHÂN
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    {" "}
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Họ và tên"
                                        defaultValue={data.NAME}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Số CCCD"
                                        defaultValue={data.ownerId}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Địa chỉ"
                                        defaultValue={data.address}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        id="outlined-read-only-input"
                                        label="Liên lạc"
                                        defaultValue={data.phone}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        )}
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    );
};

export default PopUp;
// {`${column.headerName}: ${
//     data[column.field]
// }`}
