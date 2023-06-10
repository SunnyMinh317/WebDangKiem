import React from "react";
import bgImg from "../images/bg.jpg";
// import HomePageCSS from "../pages/style/HomePage.module.css";
import HeaderAdmin from "../components/HeaderAdmin";
import MainLayoutCSS from "../pages/style/MainLayout.module.css";
const AdminHomePage = () => {
    return (
        <div
            className={MainLayoutCSS.container}
            style={{
                backgroundColor: "#ffffff",
            }}
        >
            {/* <img src={bgImg} className={HomePageCSS.bg}></img> */}
            <HeaderAdmin className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.contentWrap}>
                Đây là trang chủ admin 
            </div>
        </div>
    );
};

export default AdminHomePage;
