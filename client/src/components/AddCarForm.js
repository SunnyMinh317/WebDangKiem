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

const AddCarForm = () => {
  const [licensePlate, setLicensePlate] = useState("");

  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };

  const getData = async () => {
    // console.log(`licensePlate: ${licensePlate}`);
    // axios.post('/getAddCarForm', {
    //     licensePlate: licensePlate
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    const res = await axios.post("/vehicle/getAddCarForm", {licensePlate: licensePlate});
    // setCurrentUser(res.data);
    console.log(res.data);
    return res.data;
  };
  return (
    <div className={FormCSS.container}>
      <Card className={FormCSS.formContainer}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom className={FormCSS.title}>
                THÔNG TIN XE
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <StyledTextField
                id="outlined-read-only-input"
                label="Biển số"
                defaultValue={"Filler Data Filler Filler"}
                onChange={handleLicensePlateChange}
              />
            </Grid>
            <Grid item xs={6} sm={12}>
              <StyledButton onClick={getData}>LẤY THÔNG TIN</StyledButton>
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
              <Typography variant="h5" gutterBottom className={FormCSS.title}>
                THÔNG TIN CHỦ SỞ HỮU
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom className={FormCSS.title}>
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
