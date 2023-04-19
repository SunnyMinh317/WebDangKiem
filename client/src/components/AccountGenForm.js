import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
    Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import FormCSS from "./style/Form.module.css"

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
                },
            },
        },
    },
});

const AccountGenForm = () => {
    return (
        <div className={FormCSS.container}>
            <ThemeProvider theme={theme}>
                <Card className={FormCSS.formContainer}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            className={FormCSS.title}
                        >
                            Cấp tài khoản
                        </Typography>
                        <Typography gutterBottom>
                            Cấp tài khoản cho các trung tâm đăng kiểm trong cả
                            nước
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    className={FormCSS.textField}
                                    label="Thành phố"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    className={FormCSS.textField}
                                    label="Quận/huyện/thị xã"
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid xs={12} item>
                                <TextField
                                    className={FormCSS.textField}
                                    label="Tên trung tâm"
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid xs={12}  item>
                                <TextField
                                    className={FormCSS.textField}
                                    type="email"
                                    label="Email"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12}  item>
                                <TextField
                                    className={FormCSS.textField}
                                    label="Mật khẩu mặc định"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button variant="contained" fullWidth>
                                    Cấp tài khoản
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    );
};

export default AccountGenForm;
