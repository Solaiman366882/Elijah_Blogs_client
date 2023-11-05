import {  Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
	};

	return (
		<div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
			<div className="w-full">
				<div className="login-title">
                    <h2 className="text-6xl">Welcome Back!</h2>
                </div>
				<form
					className="flex mx-auto lg:max-w-md xl:max-w-xl flex-col gap-4"
					onSubmit={handleLogin}
				>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Your email" />
						</div>
						<TextInput
							id="email"
							type="email"
							placeholder="Enter Your Email"
							name="email"
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="password" value="Your password" />
						</div>
						<TextInput
							id="password"
							type="password"
							name="password"
							required
						/>
					</div>
					<button className="btn">Login now</button>
				</form>
                <div className="text-center mt-5">
					<p className="account-links">
                    Do not have an account yet?&nbsp;
						<Link to="/register">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
