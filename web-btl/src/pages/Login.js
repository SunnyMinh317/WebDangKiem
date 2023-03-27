import React from "react";
import LoginForm from "../components/LoginForm";
import LoginCSS from './style/Login.module.css';
import loginPageImg from "../images/login-page.jpg";

const Login = () => {
    return (
        <div className={LoginCSS.container}>
            <div className={LoginCSS.imgContainer}>
                <img className={LoginCSS.img} src={loginPageImg}/>
            </div>
            <div className={LoginCSS.formContainer}><LoginForm/></div>
            
        </div>
        
    )
}

export default Login;