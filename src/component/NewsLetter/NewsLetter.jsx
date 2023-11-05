import './NewsLetter.css'
const NewsLetter = () => {
	return (
		<div className="newsletter-section">
			<div className="flex justify-between px-8 py-14 gap-8">
				<div className="news-title flex-1">
					<h2 className='mb-8'>Subscribe to Elijah newsletter  and stay updated.</h2>
					<p>
						Do not miss anything. Get all the latest posts delivered 
						straight to your inbox. Its free!
					</p>
				</div>
				<div className='news-form-area flex-1'>
					<form>
						<label htmlFor="esub_name" className="sr-only">
							Name
						</label>

						<input
							data-members-name=""
							id="esub_name"
							className="name"
							type="text"
							name="name"
							placeholder="Your name"
						/>
						<label htmlFor="esub_email" className="sr-only">
							Email
						</label>
						<input
							data-members-email=""
							id="esub_email"
							className="email"
							type="email"
							name="email"
							placeholder="Your email address"
						/>
						<button className="btn btn-block" type="submit">
							<span>Subscribe</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
