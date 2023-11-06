import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "flowbite-react";

const RecentBlog = () => {

    const {data : blogs,isPending,isError,error} = useQuery({
        queryKey:['blogs'],
        queryFn: async () =>{

            const res = await axios.get('http://localhost:5000/blogs')
            return res.data;
        }
    });
    console.log(blogs);

    if(isPending)
    {
        return <Spinner aria-label="Extra large spinner example" size="xl" />
    }
    if(isError)
    {
        console.log('error message:',error);
        return '';
    }

	return (
		<section className="recent-blog-section py-12">
			<div className=" max-w-screen-xl mx-auto px-5">
                <div className="recent-blog-area">
                    <div className="title-section">
                        <h2>recent blog</h2>
                        <p>browse recently added blog, and explore something new.</p>
                    </div>
                </div>
            </div>
		</section>
	);
};

export default RecentBlog;
