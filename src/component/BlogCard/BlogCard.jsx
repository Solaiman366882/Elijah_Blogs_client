import PropTypes from "prop-types";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
	const {
		title,
		blogImg,
		category,
		shortDescription,
		blogOwner,
		blogOwnerImg,
	} = blog || {};

	return (
		<div>
			<div className="blog-card">
				<div className="card-header">
					<div>
						<img src={blogImg} alt="" />
					</div>
					<div className="category-area">
						<button>{category}</button>
					</div>
				</div>
				<div className="card-body">
					<div className="blog-details">
						<h2>{title}</h2>
						<p>{shortDescription}</p>
					</div>
				</div>
				<div className="card-end">
					<div className="owner-info">
						<div className="img-wrap">
							<img src={blogOwnerImg} alt="" />
						</div>
						<h4>{blogOwner}</h4>
					</div>
					<div className="btn-area flex justify-between items-center">
						<button className="btn">details</button>
						<button className="btn">Add to wishlist</button>
					</div>
				</div>
			</div>
		</div>
	);
};

BlogCard.propTypes = {
	blog: PropTypes.object,
};

export default BlogCard;
