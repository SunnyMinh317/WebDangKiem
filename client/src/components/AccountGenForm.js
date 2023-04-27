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
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

    const[inputs, setInputs] = useState ({
        city:"",
        district:"",
        name:"",
        email:"",
        password:"",
        
    })

    const [err,setErr] = useState (null) 

    const navigate = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value})) 
        console.log([e.target.name] + ": " +  e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("centre/register", inputs)
            console.log("Send centre Register");
            console.log(res)
            // navigate("/login")
        } catch(err){
            setErr(err.response.data)
            console.log(err.response.data)
        } 
    }  

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
                                    name="city"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    className={FormCSS.textField}
                                    label="Quận/huyện/thị xã"
                                    name="district"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid xs={12} item>
                                <TextField
                                    className={FormCSS.textField}
                                    label="Tên trung tâm"
                                    name="name"
                                    fullWidth
                                    required
                                    onChange={handleChange}

                                />
                            </Grid>

                            <Grid xs={12}  item>
                                <TextField
                                    className={FormCSS.textField}
                                    type="email"
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    required
                                    onChange={handleChange}

                                />
                            </Grid>
                            <Grid xs={12}  item>
                                <TextField
                                    className={FormCSS.textField}
                                    label="Mật khẩu mặc định"
                                    name="password"
                                    fullWidth
                                    required
                                    onChange={handleChange}

                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button variant="contained" fullWidth onClick={handleSubmit} >
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
