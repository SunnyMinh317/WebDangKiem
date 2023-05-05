import React from "react";
import FooterCSS from "./style/Footer.module.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={FooterCSS.container}>
            <div className={FooterCSS.logo}>
                <i class="fa-solid fa-bus"></i>
                <a>
                    RegistryTotal
                </a>
            </div>
        </footer>
    )
}

export default Footer;