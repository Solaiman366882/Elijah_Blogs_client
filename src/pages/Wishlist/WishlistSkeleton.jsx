import Skeleton from "react-loading-skeleton";
import WishlistCardSkeleton from "../../component/WishlistCard/WishlistCardSkeleton";

const WishlistSkeleton = () => {
	return (
		<div>
			<div className="wishlist-page">
				<div className="max-w-screen-xl mx-auto px-5">
					<div className="secondary-banner">
						<div className="search-area max-w-lg mx-auto relative">
							<Skeleton height={30}></Skeleton>
						</div>
						<div className="banner-title">
							<Skeleton height={18}></Skeleton>
						</div>
					</div>
                    <div className="wishlist-card-area grid grid-cols-1 md:grid-cols-2 gap-5 py-12">
							<WishlistCardSkeleton></WishlistCardSkeleton>
							<WishlistCardSkeleton></WishlistCardSkeleton>
							<WishlistCardSkeleton></WishlistCardSkeleton>
							<WishlistCardSkeleton></WishlistCardSkeleton>
						</div>
				</div>
			</div>
		</div>
	);
};

export default WishlistSkeleton;
