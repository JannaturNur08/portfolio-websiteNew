

const Experience = () => {
	return (
		<div className="pt-80 h-[500px]">
			<h2 className="text-5xl font-openSans font-bold">
				Where I've Worked
			</h2>
			<div className="flex gap-10 mt-5 items-center">
				<div className="flex gap-5 items-center">
					<div className="border-primary text-primary h-10 border-2"></div>
					<p>Playense</p>
				</div>
				<div >
					<h4>
						3D Artist{" "}
						<span className="text-primary">
							@<a href="https://playense.com/">Playense</a>
						</span>
					</h4>
					<small className="">September 2020 - July 2023</small>

					<p className="mt-5 ">
						With 3 years of hands-on involvement in the industry, I
						have honed my skills in 3D modeling,
						<br />
						texturing,rendering,rigging and animation. My proficiency extends across
						a diverse range of <br /> software, including 
						industry staples such as PS, Blender,
						ZBrush and Substance. I have a keen <br /> eye for detail and a proven 
						ability to create visually stunning and technically
						sound 3D assets <br /> for a variety of projects, from 
						video games to virtual reality experiences. My work has
						consistently <br /> demonstrated a balance between 
						artistic creativity and technical precision, resulting
						in captivating <br /> visuals that meet or exceed 
						client expectations. I am adept at collaborating with
						cross-functional  <br />teams, understanding project 
						requirements, and delivering high-quality assets within
						specified timelines.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
