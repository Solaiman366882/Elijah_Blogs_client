import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "flowbite-react";
import BlogCard from "../BlogCard/BlogCard";
import { useState } from "react";

const RecentBlog = () => {
	const [recentBlog, setRecentBlog] = useState([]);

	const {
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const res = await axios.get("http://localhost:5000/blogs");
			const blogs = res.data;
			for (let i = 0; i < blogs.length; i++) {
				for (let j = i + 1; j < blogs.length; j++) {
					const dateOfIElement = new Date(blogs[i].postingTime);
					const dateOfJElement = new Date(blogs[j].postingTime);
					if (
						dateOfIElement <
						dateOfJElement
					) {
						const temp = blogs[i];
						blogs[i] = blogs[j];
						blogs[j] = temp;
					}
				}
			}
			setRecentBlog(blogs.slice(0,6))

			return res.data;
		},
	});

	if (isPending) {
		return <Spinner aria-label="Extra large spinner example" size="xl" />;
	}
	if (isError) {
		console.log("error message:", error);
		return "";
	}

	return (
		<section className="recent-blog-section py-12">
			<div className=" max-w-screen-xl mx-auto px-5">
				<div className="title-section">
					<h2>recent blog</h2>
					<p>
						browse recently added blog, and explore something new.
					</p>
				</div>
				<div className="recent-blog-area mt-8 grid grid-cols-3 gap-5 lg:gap-7">
					{recentBlog?.map((blog) => (
						<BlogCard key={blog._id} blog={blog}></BlogCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default RecentBlog;
