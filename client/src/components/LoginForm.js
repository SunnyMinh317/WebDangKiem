import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";
import React, { useState, useContext } from "react";
import FormCSS from "./style/Form.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { StyledButton, StyledSelect, StyledTextField } from "./StyledComponent";
import axios from "axios";
let centreId = null;

const LoginForm = () => {
    //Phan them
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [err, setError] = useState(null);

    const { currentUser, login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(
            "Login form value " + [e.target.name] + ": " + e.target.value
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const loginData =  await login(inputs);
            loginNavigate(loginData);
            axios.post("/centre/getCentreId", {centreId: loginData.centreId});
            centreId = loginData.centreId;
        } catch (err) {
            setError(err.response.data);
        }
    };

    const loginNavigate = (loginData) => {
        if (loginData) {
            console.log(loginData.isAdmin);
            if(loginData.isAdmin == 1){
                navigate("/adminHome");
            } else if(loginData.isAdmin == 0) {
                navigate("/centreHome");
            }
        } else {
            console.log("No user");
        }
    }

    //Phan them
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={FormCSS.container}>
            <Card className={FormCSS.formContainer}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        className={FormCSS.title}
                    >
                        ĐĂNG NHẬP
                    </Typography>
                    {err && <div className={FormCSS.errorBox}>Tài khoản hoặc mật khẩu không đúng</div>}
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                            <StyledTextField
                                className={FormCSS.textField}
                                type="email"
                                label="Email"
                                name="email"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <StyledTextField
                                className={FormCSS.textField}
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? (
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                        className={
                                                            FormCSS.passwordIcon
                                                        }
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faEyeSlash}
                                                        className={`${FormCSS.passwordIcon} hideIcon`}
                                                    />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={12} item>
                            <StyledButton
                                variant="contained"
                                fullWidth
                                className={FormCSS.btn}
                                onClick={handleSubmit}
                            >
                                Đăng nhập
                            </StyledButton>
                        </Grid>
                        <Grid xs={12} item className={FormCSS.creditGrid}>
                            <div className={FormCSS.creditContainer}>
                                <br />
                                <p>CREATED BY:</p>
                                <div className={FormCSS.names}>
                                    <p>Chu Ngọc Vượng</p>
                                    <p>Phạm Hoàng Ân</p>
                                    <p>Vũ Nhật Minh</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default  LoginForm;
export {centreId};
