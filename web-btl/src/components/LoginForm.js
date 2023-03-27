import React from "react";
import { Link } from "react-router-dom";
import LoginFormCSS from './style/LoginForm.module.css';

const LoginForm = () => {
    return (
        <>
            <form className={LoginFormCSS.container}>
                <div className={LoginFormCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <a>
                    RegistryTotal
                </a>
                </div>
                <div className={LoginFormCSS.inputField}>
                    <label>Tên đăng nhập</label>
                    <input type="text" id="username"></input>
                </div>    
                <div className={LoginFormCSS.inputField}>
                    <label>Mật khẩu</label>
                    <input type="password" id="password"></input>
                </div>
                <div className={LoginFormCSS.btn}>
                    <Link to="/danhsachxe" id="login"><button>Đăng nhập</button></Link>
                </div>
            </form>
        </>
        
    )
}

export default LoginForm;