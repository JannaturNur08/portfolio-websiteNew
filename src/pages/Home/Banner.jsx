import { FaCloudDownloadAlt } from "react-icons/fa";

const Banner = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex items-center justify-between mt-10">
				<div className="w-full space-y-7 ml-5">
					<h3 className="lg:text-xl font-mono text-primary">
						Hi, my name is
					</h3>
					<h1 className="lg:text-7xl mt-2 mb-5  font-openSans font-bold">
						Jannatur Nur
					</h1>
					<p className="lg:text-7xl  font-openSans font-bold text-subTitleColor">
						I build things for the web.
					</p>
					<p className="font-openSans lg:text-xl text-pColor">
						I am a MERN stack developer <br /> with experience in
						building websites and applications <br /> using React,
						Node.js, Express, MongoDB.
					</p>
					{/* <div className="flex btn btn-outline border-primary text-primary w-[200px] mt-3"> */}
					<div className="flex button-primary gap-2 ">
						<FaCloudDownloadAlt className="text-primary  mt-1" />

						<button> Check out my resume!</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
