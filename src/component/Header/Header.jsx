import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
	const {user,logOut} = useContext(AuthContext);

	const handleLogOut  = () => {
		logOut()
	} 

	return (
		<header className="p-3 shadow-xl">
			<Navbar fluid rounded>
			<Link to='/'><img src={logo} className="mr-3 h-6 sm:h-9" alt=" Logo" /></Link>
				<div className="flex md:order-2">
					{
						user?.email ?
						<div>
							<Dropdown
						arrowIcon={false}
						inline
						label={
							<Avatar
								alt="User settings"
								img={user.photoURL}
								className="object-cover"
								rounded
							/>
						}
					>
						<Dropdown.Header>
							<span className="block text-sm">{user.displayName}</span>
							<span className="block truncate text-sm font-medium">
								{user.email}
							</span>
						</Dropdown.Header>
						<Dropdown.Item>Dashboard</Dropdown.Item>
						<Dropdown.Item>Settings</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item><button onClick={handleLogOut}>Sign out</button></Dropdown.Item>
					</Dropdown>
					<Navbar.Toggle />
						</div>
						
						:
						<div>
							<Link to='/login'><button className="btn">Login</button></Link>
						</div>
					}
				</div>
				<Navbar.Collapse>
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "nav-item active" : "nav-item"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/addBlog"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "nav-item active" : "nav-item"
						}
					>
						Add Blog
					</NavLink>
					<NavLink
						to="/allBlog"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "nav-item active" : "nav-item"
						}
					>
						All Blogs
					</NavLink>
					<NavLink
						to="/featured"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "nav-item active" : "nav-item"
						}
					>
						Featured Blogs
					</NavLink>
					<NavLink
						to="/wishlist"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "nav-item active" : "nav-item"
						}
					>
						Wishlist
					</NavLink>
					{
						user?.email ? '' : <NavLink
						to="/register"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "nav-item active" : "nav-item"
						}
					>
						Register
					</NavLink>
					}
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
