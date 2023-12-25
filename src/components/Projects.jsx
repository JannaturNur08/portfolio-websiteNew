const Projects = () => {
	return (
		<div className="pt-40">
			<h2>Some Things I’ve Built</h2>
			{/* project 1 */}
			<div className="flex relative mt-10 justify-center ">
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
							<span className="text-primary">
								trending products
							</span>
							, and enjoy a dynamic community experience.
						</p>
					</div>
					<div className="flex flex-row-reverse mt-3 gap-2 text-right">
						<p>React </p>
						<p>TailwindCSS</p>
						<p>Express</p>
						<p> Mongodb</p>
					</div>
                    {/* icon */}
                    <div>

                    </div>
				</div>
			</div>
			{/* project 2 */}
			<div></div>
			{/* project 3 */}
			<div></div>
		</div>
	);
};

export default Projects;
