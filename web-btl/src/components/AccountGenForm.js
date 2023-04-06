import React from "react";
import { Link } from "react-router-dom";
import AccountGenFormCSS from './style/AccountGenForm.module.css';

const AccountGenForm = () => {
    return (
        <>
            <form className={AccountGenFormCSS.container}>
                <div className={AccountGenFormCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <a>
                    RegistryTotal
                </a>
                </div>
                <div className={AccountGenFormCSS.inputField}>
                    <label>Tên đăng nhập</label>
                    <input type="text" id="username"></input>
                </div>    
                <div className={AccountGenFormCSS.inputField}>
                    <label>Mật khẩu</label>
                    <input type="password" id="password"></input>
                </div>
                <div className={AccountGenFormCSS.btn}>
                    <Link to="/danhsachxe" id="AccountGen"><button>Đăng nhập</button></Link>
                </div>
            </form>
        </>
        
    )
}

export default LoginForm;