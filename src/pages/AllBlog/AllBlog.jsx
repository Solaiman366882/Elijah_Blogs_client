import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCard from "../../component/BlogCard/BlogCard";
import { useState } from "react";
import searchIcon from "../../assets/images/searchIcon.png";

const AllBlog = () => {
	const [blogs, setBlogs] = useState([]);
	const [searchedBlogs, setSearchedBlog] = useState([]);
	const [isSearched, setIsSearched] = useState(false);
	const { isPending } = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const res = await axios.get("http://localhost:5000/blogs");
			setBlogs(res.data);
			return res.data;
		},
	});
	const handleSearchByCategory = (category) => {
		const filteredBlogs = blogs?.filter(
			(blog) => blog.category == category
		);
		setSearchedBlog(filteredBlogs);
		setIsSearched(true);
	};
    const handleSearch = e => {
        e.preventDefault()
        const searchValue = e.target.search.value;
        const filteredBlog = blogs.filter(blog => blog?.title.includes(searchValue));
        setSearchedBlog(filteredBlog)
        setIsSearched(true);
    }
	if (isPending) {
		return "Pending";
	}

	return (
		<div>
			<section className="all-blog-page">
				<div className="secondary-banner">
                    <div className="px-4 w-full">
					<div className="search-area max-w-lg mx-auto w-full relative">
                        <form onSubmit={handleSearch} >
                            <input type="search" placeholder="Search Blogs" name="search" />
                            <button><img src={searchIcon} alt="" /></button>
                        </form>

                    </div>
					</div>
					<div className="banner-title">
						<h2>All Blogs</h2>
					</div>
				</div>
				<div className="max-w-screen-xl mx-auto px-5">
					<h2 className="search-title text-xl md:text-3xl lg:text-5xl">
						search by category
					</h2>
					<div className="blog-category-area">
						<button
							className="btn"
							onClick={() => handleSearchByCategory("javascript")}
						>
							JavaScript
						</button>
						<button
							className="btn"
							onClick={() => handleSearchByCategory("nodejs")}
						>
							NodeJS
						</button>
						<button
							className="btn"
							onClick={() => handleSearchByCategory("html")}
						>
							HTML
						</button>
						<button
							className="btn"
							onClick={() => handleSearchByCategory("css")}
						>
							CSS
						</button>
						<button
							className="btn"
							onClick={() => handleSearchByCategory("react")}
						>
							React
						</button>
						<button
							className="btn"
							onClick={() => handleSearchByCategory("es6")}
						>
							ES6
						</button>
						<button
							className="btn"
							onClick={() => handleSearchByCategory("mongodb")}
						>
							MongoDB
						</button>
						<button
							className="btn"
							onClick={() => handleSearchByCategory("expressjs")}
						>
							ExpressJs
						</button>
					</div>
					{isSearched ? (
						searchedBlogs.length > 0 ? (
							<div className="py-8 grid grid-cols-3 gap-5 lg:gap-7">
								{searchedBlogs?.map((blog) => (
									<BlogCard
										key={blog._id}
										blog={blog}
									></BlogCard>
								))}
							</div>
						) : (
							<div className="w-full min-h-[30vh] flex flex-col gap-6 justify-center items-center">
								<h1 className="text-center text-5xl capitalize text-gray-400">
									not found
								</h1>
                                <button className="btn" onClick={() => setIsSearched(false)}>show all blogs</button>
							</div>
						)
					) : (
						<div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
							{blogs?.map((blog) => (
								<BlogCard key={blog._id} blog={blog}></BlogCard>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default AllBlog;
