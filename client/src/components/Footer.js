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
								<li><Link to="/adminHome">Trang chủ</Link></li>
								<li><Link to="/danhsachxe">Danh sách xe</Link></li>
								<li><Link to="/danhsachtrungtam">Danh sách trung tâm</Link></li>
								<li><Link to="/lsdkcuc">Lịch sử đăng kiểm</Link></li>
								<li><Link to="/dubaocuc">Dự báo thông tin</Link></li>
								<li><Link to="/captaikhoan">Cấp tài khoản</Link></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>Trung tâm</h4>
							<ul>
								<li><Link to="/dsxetrungtam">Danh sách xe</Link></li>
								<li><Link to="/themxe">Đăng kiểm</Link></li>
								<li><Link to="/lsdktrungtam">Lịch sử đăng kiểm</Link></li>
								<li><Link to="/dubaotrungtam">Dự báo đăng kiểm</Link></li>
								<li><Link to="/profile">Trang cá nhân</Link></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>Thành viên</h4>
							<ul>
								<li><Link to="#">Chu Ngọc Vượng</Link></li>
								<li><Link to="#">Phạm Hoàng Ân</Link></li>
								<li><Link to="#">Vũ Nhật Minh</Link></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>follow us</h4>
							<div class="social-links">
								<Link to="#"><i class="fab fa-facebook-f"></i></Link>
								<Link to="#"><i class="fab fa-twitter"></i></Link>
								<Link to="#"><i class="fab fa-instagram"></i></Link>
								<Link to="#"><i class="fab fa-linkedin-in"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
    );
}



export default Footer;