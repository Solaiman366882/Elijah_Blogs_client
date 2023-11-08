import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
	const { id } = useParams();

	const { data: blog } = useQuery({
		queryKey: ["blog"],
		queryFn: async () => {
			const res = axios.get(`http://localhost:5000/blog/${id}`);
			return (await res).data;
		},
	});

	const { title, blogImg, category, shortDescription, description } = blog || {};

    const handleBlogUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
		const blogImg = form.blogImg.value;
		const shortDescription = form.shortDescription.value;
		const category = form.category.value;
		const description = form.description.value;
        const updatedBlog = {
            title,
            blogImg,
            shortDescription,
            category,
            description,
        };
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/blog/${id}`,updatedBlog)
                .then(data => {
                    if(data.data.modifiedCount > 0)
                    {
                        Swal.fire("Blog Updated!", "", "success");
                    }
                    else{
                        Swal.fire("Something Went Wrong", "", "error");
                    }
                    
                })
                .catch(err => console.log('err',err))
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }

	return (
		<div className="max-w-screen-xl mx-auto px-5 py-10">
			<div className="add-blog-area">
				<div className="login-title">
					<h2 className="text-3xl md:text-6xl">Update Blog </h2>
				</div>
				<div className="blog-form-area max-w-screen-lg mx-auto p-5 md:p-10 ">
					<form onSubmit={handleBlogUpdate}>
						<div className="form-area w-full grid grid-cols-1 md:grid-cols-2 gap-7">
							<div className="single-input">
								<input
									type="text"
									name="title"
                                    defaultValue={title}
									placeholder="Enter your blog title"
								/>
							</div>
							<div className="single-input">
								<input
									type="text"
									name="blogImg"
                                    defaultValue={blogImg}
									placeholder="Enter a blog image url"
								/>
							</div>
							<div className="single-input">
								<input
									type="text"
									name="shortDescription"
                                    defaultValue={shortDescription}
									placeholder="Please Provide a Short Description"
								/>
							</div>
							<div className="single-input">
								<select name="category" defaultValue={category}>
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
                                    defaultValue={description}
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

export default UpdateBlog;
