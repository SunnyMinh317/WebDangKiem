import { React, useContext, useState } from "react";
import HeaderCenter from "../../components/HeaderCenter";
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
import ProfileCSS from "../style/Profile.module.css";
import AlertDialog from "../../components/AlertDialog";
import axios from "axios";
import FormCSS from "../../components/style/Form.module.css";

const Profile = () => {
    const { currentUser } = useContext(AuthContext);

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
    const [infoChange, setInfoChange] = useState({
        centreId: currentUser.centreId,
        email: currentUser.centreEmail,
        password: "",
    });

    const handleChange = (e) => {
        setInfoChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log("Profile value " + [e.target.name] + ": " + e.target.value);
    };

    //TO DO IN BACKEND
    const [err, setError] = useState(false);
    const [updateMess, setUpdateMess] = useState(false);
    const handleUpdate = async (e) => {
        setEditable(false);
        e.preventDefault();
        try {
            const res = await axios.post(
                "/centre/updateCentreInfo",
                infoChange
            );
            console.log(res.data);
            setUpdateMess(true);
        } catch (err) {
            setError(true);
        }
    };

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
                            {currentUser
                                ? currentUser.centreName
                                : "Tên Trung tâm"}
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
                                            value={
                                                currentUser
                                                    ? currentUser.centreId
                                                    : ""
                                            }
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledTextField
                                            label="Thành phố"
                                            value={
                                                currentUser
                                                    ? currentUser.centreCity
                                                    : ""
                                            }
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledTextField
                                            label="Quận"
                                            value={
                                                currentUser
                                                    ? currentUser.centreDistrict
                                                    : ""
                                            }
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={6}>
                                        <StyledTextField
                                            label="Ngày thành lập"
                                            value={
                                                currentUser
                                                    ? currentUser.establishedDate
                                                    : ""
                                            }
                                            InputProps={{ readOnly: true }}
                                        ></StyledTextField>
                                    </Grid>
                                    <Grid item sx={12} sm={12}>
                                        <StyledTextField
                                            name="email"
                                            label="Email"
                                            defaultValue={
                                                currentUser
                                                    ? currentUser.centreEmail
                                                    : ""
                                            }
                                            InputProps={{
                                                readOnly: editable
                                                    ? false
                                                    : true,
                                            }}
                                            onChange={handleChange}
                                        ></StyledTextField>
                                    </Grid>
                                    {editable && (
                                        <Grid item sx={12} sm={12}>
                                            <StyledTextField
                                                name="password"
                                                label="Mật khẩu mới"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
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
                                                                        icon={
                                                                            faEye
                                                                        }
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
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>
                                    )}

                                    {editable && <Grid item sx={12} sm={12}>
                                            <StyledTextField
                                                name="password"
                                                label="Xác nhận mật khẩu mới"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                defaultValue={
                                                    currentUser
                                                        ? ""
                                                        : ""
                                                }
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
                                                                        icon={
                                                                            faEye
                                                                        }
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
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </Grid>}

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
                                <div className={FormCSS.alertContainer}>
                                    {err && (
                                        <div className={FormCSS.errorBox}>
                                            Cập nhật không thành công
                                        </div>
                                    )}
                                    {updateMess && (
                                        <div className={FormCSS.successBox}>
                                            Cập nhật thông tin thành công
                                        </div>
                                    )}
                                </div>
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
