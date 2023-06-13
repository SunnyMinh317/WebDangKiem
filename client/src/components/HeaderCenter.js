import { React, useContext } from "react";
import HeaderCSS from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderCenter = () => {
    const { currentUser, logout } = useContext(AuthContext);

    if(!currentUser || currentUser.isAdmin != 0) {
        return (
            <header className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <Link className={HeaderCSS.li} to="/centreHome">RegistryTotal Trung Tâm</Link>
            </div>
            <nav>
                    <ul id="menu">
                        <li id="logout">
                            <Link className={HeaderCSS.li} to="/login">
                                ĐĂNG NHẬP ĐỂ BẮT ĐẦU TRUNG TÂM
                            </Link>
                        </li>
                    </ul>
            </nav>
        </header>
        )
    }

    return (
        <header className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <Link className={HeaderCSS.li} to="/centreHome">
                    RegistryTotal TRUNG TÂM
                </Link>
            </div>
            <nav>
                    <div className={HeaderCSS.navContainer}>
                        <input
                            type="checkbox"
                            className={HeaderCSS.checkbox}
                            id="checkbox"
                        ></input>
                        <label for="checkbox" className={HeaderCSS.bars}>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </label>
                        <ul id="menu" className={HeaderCSS.largeScreenNav}>
                            <li id="index">
                                <Link className={HeaderCSS.li} to="/dsxetrungtam">
                                    DANH SÁCH XE
                                </Link>
                            </li>
                            <li id="about">
                                <Link
                                    className={HeaderCSS.li}
                                    to="/themxe"
                                >
                                    ĐĂNG KIỂM
                                </Link>
                            </li>
                            <li id="about">
                                <Link
                                    className={HeaderCSS.li}
                                    to="/lsdktrungtam"
                                >
                                    LỊCH SỬ ĐĂNG KIỂM
                                </Link>
                            </li>
                            <li id="about">
                                <Link
                                    className={HeaderCSS.li}
                                    to="/dubaotrungtam"
                                >
                                    DỰ BÁO ĐĂNG KIỂM
                                </Link>
                            </li>
                            <li
                                id="profile"
                                className={HeaderCSS.largeScreenProfile}
                            >
                                <div className={HeaderCSS.dropDown}>
                                    <Link to="/profile">
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                                            alt="Profile Picture"
                                            className={HeaderCSS.profilePic}
                                            id="profilePic"
                                        />
                                    </Link>

                                    <ul className={HeaderCSS.dropDownContent}>
                                        <li className={HeaderCSS.dropDownItem}>
                                            <Link
                                                className={HeaderCSS.li}
                                                to="/profile"
                                            >
                                                TÀI KHOẢN
                                            </Link>
                                        </li>
                                        <li className={HeaderCSS.dropDownItem}>
                                            <Link
                                                className={HeaderCSS.li}
                                                to="/login"
                                                onClick={logout}
                                            >
                                                ĐĂNG XUẤT
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <div className={HeaderCSS.mobileProfile}>
                                <li>
                                    <Link
                                        className={HeaderCSS.li}
                                        to="/profile"
                                    >
                                        TÀI KHOẢN
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={HeaderCSS.li}
                                        to="/adminhome"
                                        onClick={logout}
                                    >
                                        ĐĂNG XUẤT
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
            </nav>
        </header>
    );
};

export default HeaderCenter;
