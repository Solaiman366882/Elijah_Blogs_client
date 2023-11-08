import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlog = () => {
	const { user } = useContext(AuthContext);
	const handleAddBlog = (e) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title.value;
		const blogImg = form.blogImg.value;
		const shortDescription = form.shortDescription.value;
		const category = form.category.value;
		const description = form.description.value;
		const blogOwner = user.displayName;
		const blogOwnerEmail = user.email;
		const blogOwnerImg = user.photoURL;
		const postingTime = new Date();
		const newBlog = {
			title,
			blogImg,
			shortDescription,
			category,
			description,
			blogOwner,
			blogOwnerEmail,
			blogOwnerImg,
			postingTime,
		};
		//send blog data to database
		axios
			.post("https://b8a11-server-side-solaiman366882.vercel.app/blogs",  newBlog )
			.then((data) => {
				// console.log(data.data);
				const result = data.data;
				if (result?.insertedId) {
					Swal.fire({
						title: "Good job!",
						text: "Successfully added a Blog",
						icon: "success",});
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="max-w-screen-xl mx-auto px-5 py-10">
			<div className="add-blog-area">
				<div className="login-title">
					<h2 className="text-3xl md:text-6xl">Create a New Blog </h2>
				</div>
				<div className="blog-form-area max-w-screen-lg mx-auto p-5 md:p-10 ">
					<form onSubmit={handleAddBlog}>
						<div className="form-area w-full grid grid-cols-1 md:grid-cols-2 gap-7">
							<div className="single-input">
								<input
									type="text"
									name="title"
									placeholder="Enter your blog title"
								/>
							</div>
							<div className="single-input">
								<input
									type="text"
									name="blogImg"
									placeholder="Enter a blog image url"
								/>
							</div>
							<div className="single-input">
								<input
									type="text"
									name="shortDescription"
									placeholder="Please Provide a Short Description"
								/>
							</div>
							<div className="single-input">
								<select name="category">
									<option value="javascript">
										JavaScript
									</option>
									<option value="html">HTML</option>
									<option value="css">CSS</option>
									<option value="react">React</option>
									<option value="nodejs">NodeJS</option>
									<option value="es6">ES6</option>
									<option value="expressjs">ExpressJs</option>
									<option value="mongodb">MongoDB</option>
								</select>
							</div>

							<div className="single-input md:col-span-2">
								<input
									type="text"
									name="description"
									placeholder="Write Details here..."
									className="h-40"
								/>
							</div>
							<div className="single-input md:col-span-2">
								<input
									type="submit"
									value="Submit"
									className="btn"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddBlog;
