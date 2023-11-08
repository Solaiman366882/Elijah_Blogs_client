import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import WishlistCard from "../../component/WishlistCard/WishlistCard";
import WishlistSkeleton from "./WishlistSkeleton";

const Wishlist = () => {
	const [blogs, setBlogs] = useState([]);
	const { user } = useContext(AuthContext);
	const { isPending } = useQuery({
		queryKey: ["wishlist"],
		queryFn: async () => {
			const res = await axios
				.get(`https://b8a11-server-side-solaiman366882.vercel.app/wishlist?email=${user.email}`)
				.then();
			setBlogs(res.data);
            return res.data;
		},
	});

	if (isPending) {
		return <WishlistSkeleton></WishlistSkeleton>;
	}

	return (
		<div className="wishlist-page">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="secondary-banner">
					<div className="search-area max-w-lg mx-auto relative">
                        <h2 className="text-white font-bold text-xl md:text-3xl">Hello,{user.displayName}</h2>
                    </div>
					<div className="banner-title">
						<h2>Wishlists</h2>
					</div>
				</div>
				{blogs.length > 0 ? (
					<div className="wishlist-card-area grid grid-cols-1 md:grid-cols-2 gap-5 py-12">
						{blogs?.map((blog) => (
							<WishlistCard
								key={blog._id}
								blog={blog}
                                blogs={blogs}
                                setBlogs={setBlogs}
							></WishlistCard>
						))}
					</div>
				) : (
					<div className="min-h-[50vh] w-full flex justify-center items-center">
						<h2 className="capitalize text-xl text-gray-400">Your wishlist is empty</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default Wishlist;
