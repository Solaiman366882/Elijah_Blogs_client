import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import "ka-table/style.css";

const FeaturedBlog = () => {
	const [featuredBlog, setFeaturedBlog] = useState([]);
	const { isPending } = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const res = await axios.get("https://b8a11-server-side-solaiman366882.vercel.app/blogs");
			const blogs = res.data;
			for (let i = 0; i < blogs.length; i++) {
				for (let j = i + 1; j < blogs.length; j++) {
					if (
						blogs[i].description.length <
						blogs[j].description.length
					) {
						const temp = blogs[i];
						blogs[i] = blogs[j];
						blogs[j] = temp;
						// console.log(
						// 	blogs,
						// 	blogs[i].description.length,
						// 	blogs[j].description.length
						// );
					}
				}
			}
			if (blogs.length > 10) {
				setFeaturedBlog(blogs.slice(0, 10));
			} else {
				setFeaturedBlog(blogs);
			}
			return res.data;
		},
	});

	if (isPending) {
		return "Loading";
	}
	const dataArray = featuredBlog?.map((blog, index) => ({
		column1: `${index + 1}`,
		column2: `${blog.title}`,
		column3: `${blog.blogOwner}`,
		column4: `${blog.blogOwnerEmail}`,
		//column4: `<img src={${blog.blogOwnerImg}} alt="" />`,
		id: index,
	}));

	return (
		<div className="featured-blog-page">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="login-title mt-10">
					<h2 className="text-3xl md:text-6xl">Featured Blog</h2>
				</div>
				<div className="table-area ">
					<Table
						columns={[
							{
								key: "column1",
								title: "Serial",
								dataType: DataType.String,
							},
							{
								key: "column2",
								title: "Blog Title",
								dataType: DataType.String,
							},
							{
								key: "column3",
								title: "Blog Owner",
								dataType: DataType.String,
							},
							{
								key: "column4",
								title: "Email",
								dataType: DataType.node,
							},
						]}
						data={dataArray}
						editingMode={EditingMode.Cell}
						rowKeyField={"id"}
						sortingMode={SortingMode.Single}
					/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedBlog;
