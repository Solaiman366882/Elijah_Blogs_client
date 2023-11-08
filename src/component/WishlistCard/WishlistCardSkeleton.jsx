import Skeleton from "react-loading-skeleton";
import "./WishlistCard.css";

const WishlistCardSkeleton = () => {
	return (
		<div>
			<div className="wished-blog-card flex flex-col lg:flex-row gap-5">
				<div className="card-img lg:w-64 w-full">
					<Skeleton height={180}></Skeleton>
				</div>
				<div className="wished-blog-info">
					<div className="category">
						<Skeleton></Skeleton>
					</div>
					<div className="title">
						<Skeleton></Skeleton>
					</div>
					<div>
						<Skeleton></Skeleton>
						<Skeleton></Skeleton>
					</div>
					<div className="btn-area flex justify-between items-center">
						<Skeleton height={80} width={60}></Skeleton>
						<Skeleton height={80} width={60}></Skeleton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishlistCardSkeleton;
