
import BlogCardSkeleton from "../BlogCard/BlogCardSkeleton";
import Skeleton from "react-loading-skeleton";

const RecentBlogSkeleton = () => {
	return (
		<div>
			<section className="recent-blog-section py-12">
				<div className=" max-w-screen-xl mx-auto ">
					<div className="title-section">
						<Skeleton height={200}></Skeleton>
						<Skeleton></Skeleton>
					</div>
					<div className="recent-blog-area mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
						<BlogCardSkeleton></BlogCardSkeleton>
						<BlogCardSkeleton></BlogCardSkeleton>
						<BlogCardSkeleton></BlogCardSkeleton>
						<BlogCardSkeleton></BlogCardSkeleton>
						<BlogCardSkeleton></BlogCardSkeleton>
						<BlogCardSkeleton></BlogCardSkeleton>
					</div>
				</div>
			</section>
		</div>
	);
};

export default RecentBlogSkeleton;
