import Skeleton from "react-loading-skeleton";

const BlogCardSkeleton = () => {
	return (
		<div>
			<div>
				<div
					className="blog-card"
				>
					<div className="card-header">
						<div>
							<Skeleton height={200}></Skeleton>
							{/* <img src={blogImg} alt="" /> */}
						</div>
						<div className="category-area">
							<Skeleton></Skeleton>
						</div>
					</div>
					<div className="card-body">
						<Skeleton></Skeleton>
						<Skeleton></Skeleton>
					</div>
					<div className="card-end">
						<div className="owner-info">
							<Skeleton height={30} />
							<Skeleton></Skeleton>
						</div>
						<div className="btn-area flex justify-between items-center">
							<Skeleton width={60} height={60}></Skeleton>
							<Skeleton></Skeleton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCardSkeleton;
