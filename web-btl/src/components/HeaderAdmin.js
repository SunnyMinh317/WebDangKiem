import React from "react";
import HeaderCSS from "./style/Header.module.css"
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
    return (
        <div className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <a>
                    RegistryTotal
                </a>
            </div>
            <nav>
                <ul id="menu">
                    <li id="index"><Link to="/danhsachxe">DANH SÁCH XE</Link></li>
                    <li id="about"><Link to="/danhsachtrungtam">DANH SÁCH TRUNG TÂM</Link></li>
                    <li id="field"><Link to="/captaikhoan">CẤP TÀI KHOẢN</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderAdmin;