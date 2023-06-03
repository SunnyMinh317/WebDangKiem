import { React, useContext } from "react";
import HeaderCSS from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const HeaderAdmin = () => {
    const { currentUser, logout } = useContext(AuthContext);

    const pic = document.getElementById("profilePic");
    console.log(pic);

    return (
        <header className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <Link className={HeaderCSS.li} to="/adminHome">RegistryTotal CỤC</Link>
            </div>
            <nav>
                {currentUser ? (
                <ul id="menu">
                    <li id="index">
                        <Link
                            className={HeaderCSS.li}
                            to="/danhsachxe"
                        >
                            DANH SÁCH XE
                        </Link>
                    </li>
                    <li id="about">
                        <Link className={HeaderCSS.li} to="/danhsachtrungtam">
                            DANH SÁCH TRUNG TÂM
                        </Link>
                    </li>
                    <li id="field">
                        <Link className={HeaderCSS.li} to="/captaikhoan">
                            CẤP TÀI KHOẢN
                        </Link>
                    </li>
                    <li id="profile">
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
                </ul>
                ) : (
                    <ul id="menu">
                        <li id="logout">
                            <Link className={HeaderCSS.li} to="/login" onClick={logout}>
                                ĐĂNG NHẬP ĐỂ BẮT ĐẦU CỤC 
                            </Link>
                        </li>
                    </ul>
                )} 
            </nav>
        </header>
    );
};

export default HeaderAdmin;
