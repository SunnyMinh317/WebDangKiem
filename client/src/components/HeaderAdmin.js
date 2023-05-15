import {React, useContext } from "react";
import HeaderCSS from "./style/Header.module.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const HeaderAdmin = () => {
    
    const {currentUser, logout, login} = useContext(AuthContext)

    return (
        <header className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <a>
                    RegistryTotal
                </a>
            </div>
            <nav>
                {currentUser ? 
                <ul id="menu">
                    <li id="index"><Link to="/danhsachxe">DANH SÁCH XE</Link></li>
                    <li id="about"><Link to="/danhsachtrungtam">DANH SÁCH TRUNG TÂM</Link></li>
                    <li id="field"><Link to="/captaikhoan">CẤP TÀI KHOẢN</Link></li>
                    <li id="logout"><Link to="/" onClick={logout}>
                    {currentUser ? <span onClick={logout}>ĐĂNG XUẤT</span> : <span onClick={logout}>ĐĂNG NHẬP</span>}
                        </Link></li>
                </ul>
                : 
                <ul id="menu">
                    <li id="logout"><Link to="/" onClick={logout}>ĐĂNG NHẬP ĐI EM YÊU</Link></li>
                </ul>}
                
            </nav>
        </header>
    )
}

export default HeaderAdmin;