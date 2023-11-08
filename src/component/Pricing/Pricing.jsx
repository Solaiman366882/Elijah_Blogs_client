import "./Pricing.css";
import { motion } from "framer-motion";

const Pricing = () => {
	return (
		<div className="pricing-section">
			<section className="card-section py-20">
				<motion.div
					className="title-section mb-6"
					animate={{
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 270, 270, 0],
						borderRadius: ["20%", "20%", "50%", "50%", "20%"],
					}}
				>
					<h2>Pricing</h2>
					<p>see pricing for all kind of people</p>
				</motion.div>
				<div className="max-w-screen-lg px-5 mx-auto">
					<div className="card-area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						<div className="card">
							<div>
								<h6>free</h6>
								<h3>$0</h3>

								<p>
									Signup to access all the free members-only
									posts.
								</p>
							</div>
							<ul>
								<li>Access to all free private posts</li>
								<li>Weekly newsletter about new content</li>
								<li>Support independent publishing</li>
								<li>No card details required</li>
							</ul>

							<button className="btn">Chose</button>
						</div>

						<div className="card">
							<div>
								<h6>gold</h6>

								<div className="text-gold">
									<h3>
										$50/ <sub>year</sub>
									</h3>
									<h5>17 days free traial</h5>
								</div>
								<p>17% discount</p>
								<p>
									Access all out premium paid-members only
									posts.
								</p>
							</div>
							<ul>
								<li>Access to all premium paid posts</li>
								<li>Monthly two new exclusive content</li>
								<li>Get entry to our monthly webinar</li>
								<li>Simple, secure card payment</li>
							</ul>

							<button className="btn">
								start 14 days free trail
							</button>
						</div>

						<div className="card">
							<div>
								<h6>Platinum</h6>

								<div className="text-gold">
									<h3>
										$90/ <sub>year</sub>
									</h3>
								</div>
								<p>25% discount</p>
								<p>
									Access all out premium benefits and support
									us to continue our publishing.
								</p>
							</div>
							<ul>
								<li>Access to all premium paid posts</li>
								<li>Weekly newsletter about new content</li>
								<li>Get entry to our monthly webinar</li>
								<li>Support independent publishing</li>
								<li>Simple, secure card payment</li>
							</ul>

							<button className="btn">Chose</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Pricing;
