import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
	return (
		<header className="p-3 shadow-xl">
			<Navbar fluid rounded>
			<Link to='/'><img src={logo} className="mr-3 h-6 sm:h-9" alt=" Logo" /></Link>
				<div className="flex md:order-2">
					<Dropdown
						arrowIcon={false}
						inline
						label={
							<Avatar
								alt="User settings"
								img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								rounded
							/>
						}
					>
						<Dropdown.Header>
							<span className="block text-sm">Bonnie Green</span>
							<span className="block truncate text-sm font-medium">
								name@flowbite.com
							</span>
						</Dropdown.Header>
						<Dropdown.Item>Dashboard</Dropdown.Item>
						<Dropdown.Item>Settings</Dropdown.Item>
						<Dropdown.Item>Earnings</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item>Sign out</Dropdown.Item>
					</Dropdown>
					<Navbar.Toggle />
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
					<NavLink
						to="/register"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "nav-item active" : "nav-item"
						}
					>
						Register
					</NavLink>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
