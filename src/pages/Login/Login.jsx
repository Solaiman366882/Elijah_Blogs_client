import { Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
	const location = useLocation();

	const navigate = useNavigate();
	const { userLogin, handleGoogleLogin } = useContext(AuthContext);

	const handleSocialLogin = (media) => {
		media().then((result) => {
			console.log(result);
			Swal.fire("Good job!", "Successfully login with google", "success");
			navigate(location?.state ? location.state : "/");
		});
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const validatePassword = (password) => {
			const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/;
			return pattern.test(password);
		};

		if (!validatePassword(password)) {
			return Swal.fire("Sorry !", "Invalid Password", "error");
		}

		userLogin(email, password)
			.then((result) => {
				//redirect after successfull login
				navigate(location?.state ? location.state : "/");
				console.log(result);
				Swal.fire("Good job!", "Login Successfully", "success");
			})
			.catch((err) => console.log(err));
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
					<div className="">
						<button
						type="button"
							className="btn w-full"
							onClick={() => handleSocialLogin(handleGoogleLogin)}
						>
							Google Login
						</button>
					</div>
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
