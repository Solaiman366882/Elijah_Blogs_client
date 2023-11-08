import "./PopularTags.css";
import tagIcon from "../../assets/images/tags.png";
import reactImg from "../../assets/images/react-logo.png";
import jsImg from "../../assets/images/js.png";
import arrowIcon from "../../assets/images/arrow.png";
import cssImg from "../../assets/images/css.jpg";
import nodeImg from "../../assets/images/nodejs-logo.png";
import es6Img from "../../assets/images/ES6.jpg";
import htmlImg from "../../assets/images/html.webp";
import { motion } from "framer-motion";
const PopularTags = () => {
	return (
		<div>
			<section className="all-tag-section">
				<div className="max-w-screen-xl mx-auto px-5">
					<motion.div
						className="title-section mt-8"
						animate={{
							scale: [1, 2, 2, 1, 1],
							rotate: [0, 0, 270, 270, 0],
							borderRadius: ["20%", "20%", "50%", "50%", "20%"],
						}}
					>
						<h2>Popular tags</h2>
						<p>
							browse recently added blog, and explore something
							new.
						</p>
					</motion.div>
					<div className="popular-tag-area">
						<div className="popular-tag">
							<img src={tagIcon} alt="" className="mx-auto" />
							<h3 className="capitalize">popular tags</h3>
						</div>

						<div className="react">
							<img src={reactImg} alt="" />
							<div className="text">
								<h6>react</h6>
								<p>Posts</p>
							</div>
							<div className="arrow-icon">
								<img src={arrowIcon} alt="" />
							</div>
						</div>

						<div className="react">
							<img src={jsImg} alt="" />
							<div className="text">
								<h6>javascript</h6>
								<p>Posts</p>
							</div>
							<div className="arrow-icon">
								<img src={arrowIcon} alt="" />
							</div>
						</div>

						<div className="react">
							<img src={nodeImg} alt="" />
							<div className="text">
								<h6>NodeJs</h6>
								<p>Posts</p>
							</div>
							<div className="arrow-icon">
								<img src={arrowIcon} alt="" />
							</div>
						</div>

						<div className="react">
							<img src={es6Img} alt="" />
							<div className="text">
								<h6>ES6</h6>
								<p>Posts</p>
							</div>
							<div className="arrow-icon">
								<img src={arrowIcon} alt="" />
							</div>
						</div>

						<div className="react">
							<img src={htmlImg} alt="" />
							<div className="text">
								<h6>HTML</h6>
								<p>Posts</p>
							</div>
							<div className="arrow-icon">
								<img src={arrowIcon} alt="" />
							</div>
						</div>

						<div className="react">
							<img src={cssImg} alt="" />
							<div className="text">
								<h6>CSS</h6>
								<p>Posts</p>
							</div>
							<div className="arrow-icon">
								<img src={arrowIcon} alt="" />
							</div>
						</div>

						<div className="popular-tag">
							<img src={tagIcon} alt="" className="mx-auto" />
							<h3 className="capitalize">popular tag</h3>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PopularTags;
