import React from "react";
import bgImg from "../images/bg.jpg";
import HomePageCSS from "../pages/style/HomePage.module.css";
import HeaderCenter from "../components/HeaderCenter";
import MainLayoutCSS from "../pages/style/MainLayout.module.css";
const CentreHomePage = () => {
    return (
        <div
            className={MainLayoutCSS.container}
            style={{
                backgroundColor: "#ffffff",
            }}
        >
            {/* <img src={bgImg} className={HomePageCSS.bg}></img> */}
            <HeaderCenter className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
                Đây là trang chủ center 
            </div>
        </div>
    );
};

export default CentreHomePage;
