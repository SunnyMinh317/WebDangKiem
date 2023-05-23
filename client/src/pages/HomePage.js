import React from "react";
import bgImg from "../images/bg.jpg";
import HomePageCSS from "../pages/style/HomePage.module.css";
import HeaderHome from "../components/HeaderHome";
import MainLayoutCSS from "../pages/style/MainLayout.module.css";
const HomePage = () => {
    return (
        <div
            className={MainLayoutCSS.container}
            style={{
                backgroundColor: "#ffffff",
            }}
        >
            {/* <img src={bgImg} className={HomePageCSS.bg}></img> */}
            <div className={HomePageCSS.content}>
                <HeaderHome />
            </div>
        </div>
    );
};

export default HomePage;
