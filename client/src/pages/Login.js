import React from "react";
import LoginForm from "../components/LoginForm";
import LoginCSS from "./style/Login.module.css";
import loginPageImg from "../images/login-page.jpg";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    return (
        <div className={LoginCSS.container}>
            <div className={LoginCSS.imgContainer}>
                <img className={LoginCSS.img} src={loginPageImg} />
            </div>
            <div className={LoginCSS.contentContainer}>
                <div className={LoginCSS.titleContainer}>
                    <h1>
                        <FontAwesomeIcon
                            icon={faBus}
                            className={LoginCSS.titleIcon}
                        />
                        <a className={LoginCSS.titleText}>RegistryTotal</a>
                    </h1>
                </div>
                <div className={LoginCSS.formContainer}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
