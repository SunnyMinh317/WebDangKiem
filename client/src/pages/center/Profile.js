import { React, useContext } from "react";
import HeaderCenter from "../../components/HeaderCenter";
import AddCarForm from "../../components/AddCarForm";
import MainLayoutCSS from "../style/MainLayout.module.css";
import { AuthContext } from "../../context/authContext";
import LoginPopup from "../../components/LoginPopup";
import { Grid, InputAdornment, IconButton } from "@mui/material";
import {
    StyledButton,
    StyledTextField,
} from "../../components/StyledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProfileCSS from "../style/Profile.module.css";
import AlertDialog from "../../components/AlertDialog";

const Profile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [isOpen, setOpen] = useState(false);
    const handleEditing = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [editable, setEditable] = useState(false);
    const handleAgree = () => {
        setOpen(false);
        setEditable(true);
    };

    // Thay "" thành email và mật khẩu mặc định
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    //TO DO IN BACKEND
    const handleUpdate = () => {
        console.log(password + " " + email);
    };
    const { currentUser } = useContext(AuthContext);

    if (!currentUser || currentUser.isAdmin != 0) {
        return (
            <div className={MainLayoutCSS.container}>
                <HeaderCenter className={MainLayoutCSS.header} />
                <div className={MainLayoutCSS.contentWrap}>
                    <LoginPopup />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <HeaderCenter className={MainLayoutCSS.header} />
                <div className={MainLayoutCSS.profileContainer}>
                    <div className={ProfileCSS.centering}>
                        <div className={MainLayoutCSS.profileTitle}>
                            TÊN TRUNG TÂM
                        </div>
                        <div className={ProfileCSS.contentWrap}>
                            <div className={ProfileCSS.profilePicContainer}>
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                                    className={ProfileCSS.profilePic}
                                />
                            </div>
                            <div className={ProfileCSS.infoContainer}>
                                {" "}
                                <Grid container spacing={2}>
                                    <Grid item sx={12} sm={6}>
                                        <StyledTextField
                                            label="Mã trung tâm"
                                            value="Filler Text Fillter Text"
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledTextField
                                            label="Thành phố"
                                            value="Filler Text Fillter Text"
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledTextField
                                            label="Quận"
                                            value="Filler Text Fillter Text"
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledTextField
                                            label="Ngày thành lập"
                                            value="Filler Text Fillter Text"
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={12}>
                                        <StyledTextField
                                            label="Email"
                                            defaultValue={"email@example.com"}
                                            InputProps={{
                                                readOnly: editable
                                                    ? false
                                                    : true,
                                            }}
                                            onChange={handleEmailChange}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={12}>
                                        <StyledTextField
                                            label="Password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            defaultValue="password"
                                            name="password"
                                            InputProps={{
                                                readOnly: editable
                                                    ? false
                                                    : true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={
                                                                handleShowPassword
                                                            }
                                                        >
                                                            {showPassword ? (
                                                                <FontAwesomeIcon
                                                                    icon={faEye}
                                                                />
                                                            ) : (
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEyeSlash
                                                                    }
                                                                />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onChange={handlePasswordChange}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledButton
                                            fullWidth
                                            onClick={handleEditing}
                                        >
                                            Chỉnh sửa
                                        </StyledButton>
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledButton
                                            fullWidth
                                            onClick={handleUpdate}
                                        >
                                            Cập nhật
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </div>

                            <AlertDialog
                                isOpen={isOpen}
                                handleClose={handleClose}
                                handleAgree={handleAgree}
                            ></AlertDialog>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
