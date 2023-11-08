import logoImg from "../../assets/images/logo.webp";
import './Footer.css';
import facebookIcon from "../../assets/images/facebook.png";
import instIcon from "../../assets/images/insta.png";
import gitIcon  from "../../assets/images/github.png";
import linkedIcon from "../../assets/images/linkedIn.png";

const Footer = () => {
	return (
		<div>
			<div className="footer footer-section mt-8">
				<div className="max-w-screen-xl mx-auto px-5">
					<div className="grid lg:grid-cols-5 gap-5">
						<div className="col-span-2">
							<div className="footer-content">
								<div className="footer-logo">
									<img src={logoImg} alt="" />
								</div>
								<div className="footer-text">
									<p>
										Elijah is a modern classNameic blog 
										for Ghost. Use this theme for company
										blog, magazine, niche or personal blog.
									</p>
								</div>
								<div className="social-icon">
									<ul className="flex gap-4">
									<li><a href="#"><img src={facebookIcon}alt="" /></a></li>

									<li><a href="#"><img src={linkedIcon} alt="" /></a></li>

									<li><a href="#"><img src={instIcon} alt="" /></a></li>

									<li><a href="#"><img src={gitIcon} alt="" /></a></li>
								</ul>
								</div>
							</div>
						</div>

						<div className="">
							<div className="feature">
								<h4>feature</h4>

								<div className="footer-menu">
									<ul>
										<li>
											<a href="#">Tags</a>
										</li>
										<li>
											<a href="#">Authors</a>
										</li>
										<li>
											<a href="#">Features</a>
										</li>
										<li>
											<a href="#">Contact</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="">
							<div className="feature">
								<h4>Pages</h4>

								<div className="footer-menu">
									<ul>
										<li>
											<a href="#">Membership</a>
										</li>
										<li>
											<a href="#">Sign in</a>
										</li>
										<li>
											<a href="#">Sign up</a>
										</li>
										<li>
											<a href="#">Account free</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="">
							<div className="feature">
								<h4>About</h4>

								<div className="footer-menu">
									<ul>
										<li>
											<a href="#">Privacy policy</a>
										</li>
										<li>
											<a href="#">Terms</a>
										</li>
										<li>
											<a href="#">Contact</a>
										</li>
										<li>
											<a href="#">404 error</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div>
                <p className="text-center p-5 text-gray-400">All copy rights reserved to Elijah</p>
            </div>
		</div>
	);
};

export default Footer;
