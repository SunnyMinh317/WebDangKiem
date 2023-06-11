import React from "react";
import bgImg from "../images/bg.jpg";
import HomePageCSS from "../pages/style/HomePage.module.css";
import HeaderCenter from "../components/HeaderCenter";
import MainLayoutCSS from "../pages/style/MainLayout.module.css";
const CentreHomePage = () => {
    return (
            <div className={HomePageCSS.container}>
                <header>
                    <h1>Car Registration</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Đăng nhập</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section className={HomePageCSS.hero}>
                        <h2>Chào mừng đến với RegistryTotal</h2>
                        <p>Đăng kiểm xe dễ dàng.</p>
                        <button className="cta-button">Get Started</button>
                    </section>
                    <section className={HomePageCSS.features}>
                        <div className="feature">
                            <i className="fas fa-car"></i>
                            <h3>Easy Registration</h3>
                            <p>Register your car in just a few simple steps.</p>
                        </div>
                        <div className={HomePageCSS.features}>
                            <i className="fas fa-user"></i>
                            <h3>User-Friendly Interface</h3>
                            <p>
                                Our website is designed to be intuitive and easy
                                to use.
                            </p>
                        </div>
                        <div className={HomePageCSS.features}>
                            <i className="fas fa-check"></i>
                            <h3>Efficient Process</h3>
                            <p>
                                We ensure a quick and efficient registration
                                process.
                            </p>
                        </div>
                    </section>
                </main>
                <footer>
                    <p>
                        &copy; {new Date().getFullYear()} Car Registration. All
                        rights reserved.
                    </p>
                </footer>
            </div>
    );
};

export default CentreHomePage;
