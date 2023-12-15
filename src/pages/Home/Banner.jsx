import { FaCloudDownloadAlt } from "react-icons/fa";
import "../../components/button.css";
const Banner = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex items-center justify-between">
				<div className="w-full space-y-5">
					<h3 className="text-xl font-mono text-primary">Hi, my name is</h3>
					<h1 className="text-7xl mt-2 mb-5  font-openSans font-bold">Jannatur Nur</h1>
					<p className="text-7xl  font-openSans font-bold text-subTitleColor">
					
I build things for the web.
					</p>
					<p className="font-openSans text-xl text-pColor">
						I am a full stack developer with experience in building websites and applications using React, Node.js, Express, MongoDB.
					</p>
					{/* <div className="flex btn btn-outline border-primary text-primary w-[200px] mt-3"> */}
					<div className="flex button-primary gap-2 text-xl">
						
					<FaCloudDownloadAlt className="text-primary text-xl mt-1" />

					
						
						<button> Check out my resume!</button>
					</div>
				</div>
				<div className="w-[584px] rounded-full">
					<img
						src="https://i.ibb.co/TcjhCFQ/394865229-166709613170184-4566337752726610918-n-1-removebg.png"
						alt=""
						className="rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
