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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useContext }from "react";
import FormCSS from "./style/Form.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

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

const LoginForm = () => {
    //Phan them
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
      });
      const [err, setError] = useState(null);

      const {login} = useContext(AuthContext)
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log("Login form value " + [e.target.name] + " " +e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(inputs)   
          navigate("/danhsachxe")
        } catch (err) {
          setError(err.response.data);
        }
      };

    //Phan them

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
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
                            ĐĂNG NHẬP
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    className={FormCSS.textField}
                                    type="email"
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
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
                                {/* <div onClick={handleShowPassword}>
                                    
                                </div> */}
                            </Grid>

                            <Grid xs={12} item>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    className={FormCSS.btn}
                                    onClick={handleSubmit}
                                >
                                    Đăng nhập
                                </Button>
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
                            {err && <p>{err}</p>}
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    );
};

export default LoginForm;
