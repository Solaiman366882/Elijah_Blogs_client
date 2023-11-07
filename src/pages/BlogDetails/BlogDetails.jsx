import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import { useState } from "react";
import sendIcon from '../../assets/images/send.png'

const BlogDetails = () => {
	const [commentsValue, setCommentsValue] = useState("");
	const { id } = useParams();
	const { data: blog, isPending } = useQuery({
		queryKey: ["singleBlog"],
		queryFn: async () => {
			const res = await axios.get(`http://localhost:5000/blog/${id}`);
			return res.data;
		},
	});
	const {
		title,
		blogImg,
		category,
		shortDescription,
		description,
		blogOwner,
		blogOwnerImg,
	} = blog || {};

	const handleCommentsValue = (e) => {
		setCommentsValue(e.target.value);
	};
    const handleComments = () {
        let comments = commentsValue;
        let user

    }
	if (isPending) {
		return "Loading";
	}
	return (
		<div className="max-w-screen-xl mx-auto px-5 py-10">
			<div className="blog-details-section">
				<div className="login-title">
					<h2 className="text-6xl">{title}</h2>
				</div>
				<div className="blog-details-area my-10 ">
					<div className="blog-info-area grid grid-cols-2 gap-6 items-center">
						<div className="blog-left-img">
							<img src={blogImg} alt="" />
							<div className="blog-owner-info flex justify-between items-center">
								<div className="blog-owner">
									<div className="img-wrap">
										<img src={blogOwnerImg} alt="" />
									</div>
									<h4>{blogOwner}</h4>
								</div>
								<div className="category-area">
									<button className="cat-btn">
										{category}
									</button>
								</div>
							</div>
						</div>
						<div className="blog-right-text">
							<div className="blog-info">
								<h4>{shortDescription}</h4>
								<p>{description}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="blog-comment-area">
					<div className="blog-comments"></div>
					<div className="blog-make-comment">
						<textarea
							onChange={handleCommentsValue}
							name="comment"
							id="comment"
							cols="30"
							rows="3"
						></textarea>
                        <div className="send-btn">
                            <button onClick={}><img src={sendIcon} alt="" /></button>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetails;
