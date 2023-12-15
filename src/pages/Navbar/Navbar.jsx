import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const navOptions = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/experience"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}>
					Experience
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/portfolio"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}>
					Portfolio
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/contact"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}>
					Contact
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="flex justify-between sticky h-7 py-5 mx-auto container">
			<div>
				<img
					src="https://i.ibb.co/Nt41bYK/logo-1.png"
					alt=""
					className="w-[50px]"
				/>
			</div>
			<div className="flex p-5 text-center justify-center gap-10 font-mono list-none lg:hidden">
				{/* Hamburger menu icon */}
				<button onClick={() => setMenuOpen(!isMenuOpen)}>
					<svg
						className="w-6 h-6 cursor-pointer"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>

				{isMenuOpen && (
					<div className="fixed inset-0 bg-opacity-75 z-50">
						<div className="flex justify-end p-4">
							<button onClick={() => setMenuOpen(false)}>
								{/* Close menu icon */}
								<svg
									className="w-6 h-6 cursor-pointer"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-col items-center mt-10 space-y-5">
							{navOptions}
							<Link to="/hire-me">
								<button className="button-primary items-center justify-center mt-2">
									Hire me
								</button>
							</Link>
						</div>
					</div>
				)}
			</div>

			{/* Desktop navigation */}
			<div className="hidden lg:flex p-5 text-center items-center justify-center gap-10 font-mono list-none">
				{navOptions}
				<Link to="/hire-me">
					<button className="button-primary items-center justify-center ">
						Hire me
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
