
import Skeleton from 'react-loading-skeleton';

const BlogDetailsSkeleton = () => {
    return (
        <div className='bd-skeleton'>
            <div className="max-w-screen-xl mx-auto px-5 py-10">
			<div className="blog-details-section">
				<div className="login-title">
					<Skeleton height={30} />
				</div>
				<div className="blog-details-area my-10 ">
					<div className="blog-info-area grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
						<div className="blog-left-img">
							{/* <img src={blogImg} alt="" /> */}
							<Skeleton height={200}></Skeleton>
							<div className="blog-owner-info flex justify-between items-center">
								<div className="blog-owner">
									<div className="img-wrap">
										<Skeleton width={30} height={30} circle></Skeleton>
									</div>
									<Skeleton></Skeleton>
								</div>
								<div className="category-area">
									<Skeleton />
								</div>
							</div>
						</div>
						<div className="blog-right-text">
							<div className="blog-info">
								<Skeleton></Skeleton>
								<Skeleton></Skeleton>
							</div>
						</div>
					</div>
				</div>
				<div className="blog-comment-area">
					<div className="comments-header">
						<h2>Comments</h2>
					</div>
					<div className="blog-comments py-7">
						<Skeleton></Skeleton>
					</div>
					<div className="blog-make-comment max-w-3xl mx-auto">
						<Skeleton width={100} height={30}></Skeleton>
						<div className="send-btn">
							<Skeleton></Skeleton>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    );
};

export default BlogDetailsSkeleton;