import React from "react";
import HeaderCSS from "./style/Header.module.css"
import { Link } from "react-router-dom";

const HeaderCenter = () => {
    return (
        <header className={HeaderCSS.container}>
            <div className={HeaderCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <a>
                    RegistryTotal
                </a>
            </div>
            <nav>
                <ul id="menu">
                    <li id="index"><Link to="/dsxetrungtam">DANH SÁCH XE</Link></li>
                    <li id="field"><Link to="/themxe">THÊM XE</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderCenter;