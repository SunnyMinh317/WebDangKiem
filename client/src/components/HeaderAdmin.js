import { React, useContext } from "react";
import HeaderCSS from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderAdmin = () => {
    const { currentUser, logout } = useContext(AuthContext);
    if(!currentUser || currentUser.isAdmin != 1){
        return (
            <header className={HeaderCSS.container}>
                <div className={HeaderCSS.logo}>
                    <i class="fa-solid fa-bus"></i>
                    <Link className={HeaderCSS.li} to="/adminHome">
                        RegistryTotal
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
                        <ul id="menu">
                            <li id="logout">
                                <Link
                                    className={HeaderCSS.li}
                                    to="/login"
                                >
                                    ĐĂNG NHẬP ĐỂ BẮT ĐẦU
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </header>
        )
    }

    return (
        <header className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <Link className={HeaderCSS.li} to="/adminHome">
                    RegistryTotal
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
                            <Link className={HeaderCSS.li} to="/danhsachxe">
                                DANH SÁCH XE
                            </Link>
                        </li>
                        <li id="about">
                            <Link
                                className={HeaderCSS.li}
                                to="/danhsachtrungtam"
                            >
                                DANH SÁCH TRUNG TÂM
                            </Link>
                        </li>
                        <li id="about">
                            <Link
                                className={HeaderCSS.li}
                                to="/dubaocuc"
                            >
                                DỰ BÁO
                            </Link>
                        </li>
                        <li id="about">
                            <Link
                                className={HeaderCSS.li}
                                to="/lsdkcuc"
                            >
                                LỊCH SỬ ĐĂNG KIỂM
                            </Link>
                        </li>
                        <li id="field">
                            <Link
                                className={HeaderCSS.li}
                                to="/captaikhoan"
                            >
                                CẤP TÀI KHOẢN
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
                                            to="/adminHome"
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
                                    to="/adminHome"
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

export default HeaderAdmin;
