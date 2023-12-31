import "./Navbar.css";
import { useState } from "react";
import { AnchorLink } from "react-anchor-navigation";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const navOptions = (
		<>
			<li>
				<AnchorLink
					href="#banner"
					activeClassName="active"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}
					onClick={closeMenu}>
					Home
				</AnchorLink>
			</li>
			<li>
				<AnchorLink
					href="#about"
					activeClassName="active"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}
					onClick={closeMenu}>
					About
				</AnchorLink>
			</li>
			<li>
				<AnchorLink
					href="#education"
					activeClassName="active"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}
					onClick={closeMenu}>
					Education
				</AnchorLink>
			</li>
			<li>
				<AnchorLink
					href="#experience"
					activeClassName="active"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}
					onClick={closeMenu}>
					Experience
				</AnchorLink>
			</li>
			<li>
				<AnchorLink
					href="#portfolio"
					activeClassName="active"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}
					onClick={closeMenu}>
					Portfolio
				</AnchorLink>
			</li>
		</>
	);
	return (
		<div className="flex justify-between sticky-header  h-7 py-5 mx-auto container">
			<div>
				<img src="" alt="" className="w-[50px]" />
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
							<AnchorLink href="#contact">
								<button className="button-primary items-center justify-center mt-2">
									Hire me
								</button>
							</AnchorLink>
						</div>
					</div>
				)}
			</div>

			{/* Desktop navigation */}
			<div className="sticky-header">
				<div className="hidden lg:flex  p-5 text-center items-center justify-center gap-10 font-mono list-none">
					{navOptions}

					<AnchorLink href="#contact">
						<button className="button-primary items-center justify-center mt-2">
							Hire me
						</button>
					</AnchorLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
