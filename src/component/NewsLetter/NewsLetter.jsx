import axios from 'axios';
import './NewsLetter.css'
import Swal from 'sweetalert2';
const NewsLetter = () => {

	const handleNewsLetter = e => {

		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		console.log(name,email);
		const newsLetter = {name,email}
		axios.post('http://localhost:5000/newsLetter',newsLetter)
		.then(data => {
			const result = data.data;
			if (result?.insertedId) {
				Swal.fire({
					title: "Good job!",
					text: "Subscription Completed",
					icon: "success",});
			}
		})
	}

	return (
		<div className="newsletter-section">
			<div className="flex flex-col lg:flex-col justify-between px-8 py-14 gap-8">
				<div className="news-title flex-1">
					<h2 className='mb-8'>Subscribe to Elijah newsletter  and stay updated.</h2>
					<p>
						Do not miss anything. Get all the latest posts delivered 
						straight to your inbox. Its free!
					</p>
				</div>
				<div className='news-form-area flex-1'>
					<form onSubmit={handleNewsLetter}>
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
							required
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
