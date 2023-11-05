import { Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
	const {createUser} = useContext(AuthContext);
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value;
		console.log(email, password, name,photo);

		createUser(email,password)
		.then(res => {
			const user = res.user;
			console.log('user after credential:',user);
			updateProfile(user,{
				displayName:name,
				photoURL:photo
			})
			.then(() => {
				alert('user created successfully');
			})
		})
	};
	return (
		<div className="w-full min-h-[80vh] py-10 flex flex-col justify-center items-center">
			<div className="w-full">
				<div className="login-title">
					<h2 className="text-3xl md:text-6xl">Create Account</h2>
				</div>
				<form
					className="flex mx-auto lg:max-w-md xl:max-w-xl flex-col gap-4"
					onSubmit={handleRegister}
				>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="name" value="Your Name" />
						</div>
						<TextInput
							id="name"
							type="text"
							placeholder="Enter Your name"
							name="name"
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="photo" value="Your Photo" />
						</div>
						<TextInput
							id="photo"
							type="text"
							placeholder="Enter Your Photo url"
							name="photo"
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Your Email" />
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
							<Label htmlFor="password" value="Your Password" />
						</div>
						<TextInput
							id="password"
							type="password"
							name="password"
							required
						/>
					</div>
					<button className="btn">Sign Up</button>
				</form>
				<div className="text-center mt-5">
					<p className="account-links">
						Already have an account?&nbsp;
						<Link to="/login">Sign In</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
