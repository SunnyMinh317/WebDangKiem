import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormCSS from "./style/Form.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledSelect, StyledTextField } from "./StyledComponent";
import { faL } from "@fortawesome/free-solid-svg-icons";



const AccountGenForm = () => {
    const[inputs, setInputs] = useState ({
        city:"",
        district:"",
        name:"",
        email:"",
        password:"",
        
    })

    const [err,setErr] = useState (null) 
    const [updateMess, setUpdateMess] = useState(false);

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
            setErr(null)
            setUpdateMess(true)
            // navigate("/login")
        } catch(err){
            setErr(err.response.data)
            setUpdateMess(false)
            console.log(err.response.data)
        } 
    }  

        return (
        <div className={FormCSS.container}>
                <Card className={FormCSS.formContainer}>
                    <CardContent>
                        <div className={FormCSS.alertContainer}>
                            {err && (
                                <div className={FormCSS.errorBox}>
                                    {err}
                                </div>
                            )}
                            {updateMess && (
                                <div className={FormCSS.successBox}>
                                    Tạo tài khoản thành công
                                </div>
                            )}
                        </div>
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
                                <StyledTextField
                                    className={FormCSS.textField}
                                    label="Thành phố"
                                    name="city"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <StyledTextField
                                    className={FormCSS.textField}
                                    label="Quận/huyện/thị xã"
                                    name="district"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid xs={12} item>
                                <StyledTextField
                                    className={FormCSS.textField}
                                    label="Tên trung tâm"
                                    name="name"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid xs={12}  item>
                                <StyledTextField
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
                                <StyledTextField
                                    className={FormCSS.textField}
                                    label="Mật khẩu mặc định"
                                    name="password"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <StyledButton variant="contained" fullWidth onClick={handleSubmit} >
                                    Cấp tài khoản
                                </StyledButton>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
        </div>
    );
};

export default AccountGenForm;
