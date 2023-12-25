import { TbBrandGithub } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
	return (
		<div className="pt-40">
			<h2>Some Things I’ve Built</h2>
			{/* project 1 */}
			<div className="flex relative mt-12 justify-center ">
				<div className="w-3/4">
					<img
						src="https://i.ibb.co/48956Ch/409468057-874265714229204-7514339199498190746-n.png"
						className=""
						alt=""
					/>
				</div>
				<div className="bg-transparent text-right w-1/2">
					<h5 className=" font-bold text-primary">
						Featured Project
					</h5>
					<h3>Tech Product Review</h3>
					<div className="bg-[#112240]">
						<p className="bg-[#112240] p-5 mt-5">
							The technology-centric platform allows users to
							engage in discussions, explore featured and{" "}
							<span className="text-primary bg-transparent">
								trending products
							</span>
							, and enjoy a dynamic community experience.
						</p>
					</div>
					<div className="flex flex-row-reverse mt-3 gap-2 ">
						<p>React </p>
						<p>TailwindCSS</p>
						<p>Express</p>
						<p> Mongodb</p>
					</div>
					{/* icon */}
					<div className="flex flex-row-reverse gap-3 mt-7 ">
						<a href="https://final-project-client-eadc0.web.app/">
							<FaExternalLinkAlt className="text-xl" />
						</a>
						<a href="https://github.com/JannaturNur08/tech-product-website-client-repo">
							<TbBrandGithub className="text-2xl" />
						</a>
					</div>
				</div>
			</div>
			{/* project 2 */}
			<div className="flex relative mt-32 justify-center ">
				<div className="bg-transparent text-left w-1/2">
					<h5 className=" font-bold text-primary">
						Featured Project
					</h5>
					<h3>Hotel Booking Website</h3>
					<div className="bg-[#112240]">
						<p className="bg-[#112240] p-5 mt-5">
							This{" "}
							<span className="text-primary bg-transparent">
								Hotel Booking
							</span>{" "}
							Website is designed to provide users with a
							user-friendly interface for exploring available
							rooms, making reservations, and managing bookings.
							The application incorporates user authentication
							using Firebase and{" "}
							<span className="text-primary bg-transparent">
								JWT tokens
							</span>{" "}
							for secure access.
						</p>
					</div>
					<div className="flex  mt-3 gap-2 ">
						<p>React </p>
						<p>TailwindCSS</p>
						<p>Express</p>
						<p> Mongodb</p>
					</div>
					{/* icon */}
					<div className="flex  gap-3 mt-7 ">
						<a href="https://hotel-book-client-86c05.web.app/">
							<FaExternalLinkAlt className="text-xl" />
						</a>
						<a href="https://github.com/JannaturNur08/hotel-booking-client-repo">
							<TbBrandGithub className="text-2xl" />
						</a>
					</div>
				</div>
				<div className="w-3/4">
					<img
						src="https://i.ibb.co/XDNv5Dv/403399486-380727407952759-6691861232967913501-n.png"
						className=""
						alt=""
					/>
				</div>
			</div>
			{/* project 3 */}
			<div className="flex relative mt-32 justify-center ">
				<div className="w-3/4">
					<img
						src="https://i.ibb.co/CPndcYh/410089181-387161817105373-5801356793707587277-n.png"
						className=""
						alt=""
					/>
				</div>
				<div className="bg-transparent text-right w-1/2">
					<h5 className=" font-bold text-primary">
						Featured Project
					</h5>
					<h3>Automotive website</h3>
					<div className="bg-[#112240]">
						<p className="bg-[#112240] p-5 mt-5">
							Rev up your passion for cars with our{" "}
							<span className="text-primary bg-transparent">
								automotive website!
							</span>{" "}
							When you find the perfect match, our secure login
							and cart system lets you personalise your car
							journey. It's time to drive into the future with our
							automotive website!
						</p>
					</div>
					<div className="flex flex-row-reverse mt-3 gap-2 ">
						<p>React </p>
						<p>TailwindCSS</p>
						<p>Express</p>
						<p> Mongodb</p>
					</div>
					{/* icon */}
					<div className="flex flex-row-reverse gap-3 mt-7 ">
						<a href="https://fantastic-entremet-2182db.netlify.app/">
							<FaExternalLinkAlt className="text-xl" />
						</a>
						<a href="https://github.com/JannaturNur08/automotive-website">
							<TbBrandGithub className="text-2xl" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
