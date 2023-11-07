import PropTypes from "prop-types";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const BlogCard = ({ blog }) => {
	const { user } = useContext(AuthContext);

	const {
		title,
		blogImg,
		category,
		shortDescription,
		blogOwner,
		blogOwnerImg,
		_id,
	} = blog || {};

	//handle add blog to user wish list
	const handleWishlist = () => {
		const wishlistBlog = {
			title,
			category,
			shortDescription,
			blogImg,
			wishlistOwner: user.email,
			blog_id: _id,
		};
		axios
			.post("http://localhost:5000/wishlist", wishlistBlog)
			.then((data) => {
				const result = data.data;
				if (result?.insertedId) {
					Swal.fire({
						title: "Wow!",
						text: "Successfully added to Wishlist",
						icon: "success",
					});
				} else {
					Swal.fire({
						title: "Sorry!",
						text: "Something went wrong",
						icon: "error",
					});
				}
			})
			.catch((err) => console.log(err));
	};

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
						<Link to={`/blog/${_id}`}>
							<button className="btn">details</button>
						</Link>
						<button className="btn" onClick={handleWishlist}>
							Add to wishlist
						</button>
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
