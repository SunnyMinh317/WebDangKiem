import { React, useContext } from "react";
import HeaderCSS from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";


const HeaderCenter = () => {
    const { currentUser, logout } = useContext(AuthContext);

    if(!currentUser) {
        return (
            <header className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <Link className={HeaderCSS.li} to="/centreHome">RegistryTotal Trung Tâm</Link>
            </div>
            <nav>
                    <ul id="menu">
                        <li id="logout">
                            <Link className={HeaderCSS.li} to="/login" onClick={logout}>
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
                <Link className={HeaderCSS.li} to="/centreHome">RegistryTotal Trung Tâm</Link>
            </div>
            <nav>
                <ul id="menu">
                    <li id="index">
                        <Link to="/dsxetrungtam">DANH SÁCH XE</Link>
                    </li>
                    <li id="field">
                        <Link className={HeaderCSS.li} to="/themxe">
                            THÊM XE
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
            </nav>
        </header>
    );
};

export default HeaderCenter;
