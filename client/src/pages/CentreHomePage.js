import React from "react";
import bgImg from "../images/bg.jpg";
import HomePageCSS from "../pages/style/HomePage.module.css";
import HeaderCenter from "../components/HeaderCenter";
import MainLayoutCSS from "../pages/style/MainLayout.module.css";
import { StyledButton } from "../components/StyledComponent";
import HomePagePic from "../../src/images/3156627.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
const CentreHomePage = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div>
            <HeaderCenter></HeaderCenter>
            <div className={HomePageCSS.bigContainer}>
                <div className={HomePageCSS.container}>
                    <div className={HomePageCSS.left}>
                        <div className={HomePageCSS.titleContainer}>
                            REGISTRYTOTAL
                        </div>
                        {currentUser &&<div className={HomePageCSS.nameContainer}>
                            Trung tâm
                        </div>}
                        <div className={HomePageCSS.leftBottom}>
                            <div className={HomePageCSS.subtitleContainer}>
                                Đăng kiểm nhanh chóng cùng RegistryTotal
                            </div>
                            {(!currentUser || currentUser.isAdmin != 0) && (
                                <div className={HomePageCSS.btnContainer}>
                                    <Link to="/login">
                                        <StyledButton
                                            sx={{
                                                width: "130px",
                                                height: "40px",
                                            }}
                                        >
                                            Đăng nhập
                                        </StyledButton>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={HomePageCSS.right}>
                        <img src={HomePagePic}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentreHomePage;
