import { FaArrowRight } from "react-icons/fa6";

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
					<small className="">September 2020 - July 2022</small>

					<p className="mt-5 ">
						With 3 years of hands-on involvement in the industry, I
						have honed my skills in 3D modeling,
						<br />
						texturing, and rendering. My proficiency extends across
						a diverse range of software, including <br />
						industry staples such as Autodesk Maya, Blender, and
						ZBrush. I have a keen eye for detail and a proven <br />
						ability to create visually stunning and technically
						sound 3D assets for a variety of projects, from <br />
						video games to virtual reality experiences. My work has
						consistently demonstrated a balance between <br />
						artistic creativity and technical precision, resulting
						in captivating visuals that meet or exceed <br />
						client expectations. I am adept at collaborating with
						cross-functional teams, understanding project <br />
						requirements, and delivering high-quality assets within
						specified timelines.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
