import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
			<li>
				<NavLink
					to="/hireme"
					>
					<button className="button-primary">
						Hire me
					</button>
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="flex justify-between sticky">
			<div>
				<img src="https://i.ibb.co/Nt41bYK/logo-1.png" alt="" />
			</div>
			<div className=" flex p-5 text-center justify-center gap-10 font-mono">
				{navOptions}
			</div>
		</div>
	);
};

export default Navbar;
