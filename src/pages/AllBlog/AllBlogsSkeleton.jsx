import Skeleton from "react-loading-skeleton";
import BlogCardSkeleton from "../../component/BlogCard/BlogCardSkeleton";

const AllBlogsSkeleton = () => {
	return (
		<div>
			<div>
				<section className="all-blog-page">
					<div className="secondary-banner">
						<div className="px-4 w-full">
							<div className="search-area max-w-lg mx-auto w-full relative">
								<Skeleton height={50}></Skeleton>
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
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
                            <Skeleton width={50} height={80}></Skeleton>
						</div>

							<div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
								<BlogCardSkeleton></BlogCardSkeleton>
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
		</div>
	);
};

export default AllBlogsSkeleton;
