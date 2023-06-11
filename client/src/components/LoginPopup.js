import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./style/LoginPopup.css"
import image from "../images/Mobile-login.jpg"
import { useNavigate } from "react-router-dom";
const LoginPopup = () => {
    const navigate = useNavigate();
    return (
        <div className="popup">
            <button className="popButton" id="close">&times;</button>
            <h2>Vui lòng đăng nhập</h2>
            {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio fugiat alias iure qui, commodi minima magni ullam aliquam dignissimos?
            </p> */}
            <img className="image" src={image}></img>
            <button className="toLogin" onClick={() => {
                navigate("/login")
            }}>Đăng nhập</button>
        </div>
    )
}

export default LoginPopup;