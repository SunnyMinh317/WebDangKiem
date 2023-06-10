import React from "react";
import FooterCSS from "./style/Footer.module.css"
import { Link } from "react-router-dom";
import "./style/Footer.css"

const Footer = () => {
    return (
			<footer class="footer">
				<div class="container">
					<div class="row">
						<div class="footer-col">
							<h4>Cục đăng kiểm</h4>
							<ul>
								<li><a href="#">Trang chủ</a></li>
								<li><a href="#">Danh sách xe</a></li>
								<li><a href="#">Danh sách trung tâm</a></li>
								<li><a href="#">Cập nhập dữ liệu</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>Trung tâm</h4>
							<ul>
								<li><a href="#">Danh sách xe</a></li>
								<li><a href="#">Đăng kiểm</a></li>
								<li><a href="#">Dự báo đăng kiểm</a></li>
								<li><a href="#">Trang cá nhân</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>Thành viên</h4>
							<ul>
								<li><a href="#">Chu Ngọc Vượng</a></li>
								<li><a href="#">Nguyễn Hoàng Ân</a></li>
								<li><a href="#">Vũ Nhật Minh</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>follow us</h4>
							<div class="social-links">
								<a href="#"><i class="fab fa-facebook-f"></i></a>
								<a href="#"><i class="fab fa-twitter"></i></a>
								<a href="#"><i class="fab fa-instagram"></i></a>
								<a href="#"><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>
					</div>
				</div>
			</footer>
    );
}



export default Footer;