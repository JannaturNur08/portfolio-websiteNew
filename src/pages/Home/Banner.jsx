import { FaCloudDownloadAlt } from "react-icons/fa";

const PDF_URL = "http://localhost:5173/Resume_JannaturNur (2).pdf";
const Banner = () => {
	const downloadURL = (url) => {
		const fileName = url.split("/").pop();
		const aTag = document.createElement("a");
		aTag.href = url;
		aTag.setAttribute("download", fileName);
		document.body.appendChild(aTag);
		aTag.click();
		aTag.remove();
	};
	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex items-center justify-between mt-10">
				<div className="w-full ml-5 flex flex-col gap-10">
					<div>
						<h4 className="font-mono text-primary">
							Hi, my name is
						</h4>
						<h1 className="">Jannatur Nur</h1>
						<h2 className=" text-subTitleColor">
							I build things for the web.
						</h2>
					</div>
					<p className="font-hermit text-pColor">
						I am a MERN stack developer <br /> with experience in
						building websites and applications <br /> using React,
						Node.js, Express, MongoDB.
					</p>
					{/* <div className="flex btn btn-outline border-primary text-primary w-[200px] mt-3"> */}
					<div className="flex button-primary gap-2 ">
						<FaCloudDownloadAlt className="text-primary  mt-1" />

						<button
							onClick={() => {
								downloadURL(PDF_URL);
							}}
							className="z-10 font-hermit">
							{" "}
							Check out my resume!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
