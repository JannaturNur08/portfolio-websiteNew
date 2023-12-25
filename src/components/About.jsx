import { FaArrowRight } from "react-icons/fa6";
const About = () => {
	return (
		<div className=" flex flex-col md:flex-row justify-between gap-10 pt-40">
			<div className="max-w-xl">
				<h2 className="">About Me</h2>
				<p className="mt-5">
					Hello! My name is Jannatur Nur and I enjoy creating things
					that live on the internet. My interest in web development
					started back in 2023 when I decided to build website using
					HTML & CSS! <br /> <br />
					Fast-forward to today, and I’ve had the privilege of working
					at <span  className="text-primary">MatraSoft</span>, a start-up, and a student-led design studio.
					My main focus these days is building accessible, inclusive
					products and digital experiences for a variety of clients.{" "}
					<br />
					<br /> I also recently completely a course that covers
					everything you need to build a web app with the <span className="text-primary"> Restful API </span>
					using <span className="text-primary">Node</span> & <span className="text-primary">React</span>. <br />
					<br />
					Here are a few technologies I’ve been working with recently:
				</p>

				<div className="grid grid-cols-2 mt-5 ">
					<div className="flex gap-2  items-center font-hermit">
						<FaArrowRight />
						JavaScript (ES6+)
					</div>
					<div className="flex gap-2 items-center font-hermit">
						<FaArrowRight />
						React
					</div>
					<div className="flex gap-2 items-center font-hermit">
						<FaArrowRight />
						TailwindCSS
					</div>
					<div className="flex gap-2 items-center font-hermit">
						<FaArrowRight />
						Next.js
					</div>
					<div className="flex gap-2 items-center font-hermit">
						<FaArrowRight />
						Node.js
					</div>
					<div className="flex gap-2 items-center font-hermit">
						<FaArrowRight />
						Express.js
					</div>
				</div>
			</div>
			<div className="">
				<img
					src="/public/nur.png"
					alt=""
					className="  w-3/4 rounded-full"
				/>
			</div>
		</div>
	);
};

export default About;
