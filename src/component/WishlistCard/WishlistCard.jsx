import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./WishlistCard.css";
import Swal from "sweetalert2";
import axios from "axios";
const WishlistCard = ({ blog,blogs,setBlogs }) => {
	const {
		title,
		category,
		shortDescription,
		blogImg,
		// wishlistOwner,
		blog_id,
        _id
	} = blog || {};

	const handleRemoveWishlist = () => {
		Swal.fire({
			title: "Do you want to Delete?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Delete",
			denyButtonText: `Don't Delete`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				
                axios.delete(`http://localhost:5000/wishlist/${_id}`)
                .then(data => {
                    const res = data.data;
                    if(res.deletedCount > 0)
                    {
                        const remainingBlogs = blogs.filter(blogF => blogF._id !== _id);
                        setBlogs(remainingBlogs);
                        Swal.fire("Deleted!", "", "success");
                    }
                })
                .catch(err => {
                    console.log(err);
                    Swal.fire("could not delete", "", "error");
                })
			} else if (result.isDenied) {
				Swal.fire("Delete Cancel", "", "info");
			}
		});
	};
	return (
		<div className="wished-blog-card flex gap-5">
			<div className="card-img w-64">
				<img src={blogImg} alt="" />
			</div>
			<div className="wished-blog-info">
				<div className="category">
					<h2>{category}</h2>
				</div>
				<div className="title">
					<h3>{title}</h3>
				</div>
				<div>
					<p className="description">{shortDescription}</p>
				</div>
				<div className="btn-area flex justify-between items-center">
					<button className="sec-btn" onClick={handleRemoveWishlist}>
						Remove
					</button>
					<Link to={`/blog/${blog_id}`}>
						<button className="sec-btn">Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
WishlistCard.propTypes = {
	blog: PropTypes.object,
    blogs:PropTypes.array,
    setBlogs:PropTypes.func
};

export default WishlistCard;
