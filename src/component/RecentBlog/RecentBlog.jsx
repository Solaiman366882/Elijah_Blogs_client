import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "flowbite-react";
import BlogCard from "../BlogCard/BlogCard";
// import { useEffect, useState } from "react";

const RecentBlog = () => {

    // const [recentBlog,setRecentBlog] = useState([]);

    const {data : blogs,isPending,isError,error} = useQuery({
        queryKey:['blogs'],
        queryFn: async () =>{

            const res = await axios.get('http://localhost:5000/blogs')
            return res.data;
        }
    });
    console.log('blogs before sorting',blogs);
    // useEffect(() => {
    //     // const sortedBlog = blogs.find().sort({ timestamp: -1 });
    //     // const postDate =new Date(blogs[0].postingTime); 
    //     // const postDate2 =new Date(blogs[1].postingTime); 
    //     // const postDate3 =new Date(blogs[2].postingTime); 
    //     // console.log(postDate,postDate2,postDate3);
    //    if(!isPending)
    //    {
    //     blogs.sort(function(a,b){
    //         // Turn your strings into dates, and then subtract them
    //         // to get a value that is either negative, positive, or zero.
    //         return new Date(b.postingTime) - new Date(a.postingTime);
    //       });

    //     console.log('blogs after sorting',blogs);
    //    }
    // },[isPending])

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
                <div className="title-section">
                        <h2>recent blog</h2>
                        <p>browse recently added blog, and explore something new.</p>
                    </div>
                <div className="recent-blog-area mt-8 grid grid-cols-3 gap-5 lg:gap-7">
                    {
                        blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
		</section>
	);
};

export default RecentBlog;
