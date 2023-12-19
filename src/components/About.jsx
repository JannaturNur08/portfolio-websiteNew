import { FaArrowRight } from "react-icons/fa6";
const About = () => {
	return (
		<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between pt-20">
			<div>
				<h2 className="text-5xl font-openSans font-bold">About Me</h2>
				<p className="text-xl mt-5">
					Hello! My name is Jannatur Nur and I enjoy creating things that
					live on the internet. My interest in web development started
					back in 2023 when I decided to build website using HTML & CSS! <br /> Fast-forward to
					today, and I’ve had the privilege of working at MatraSoft, a start-up, and a
					student-led design studio. My main focus these days is
					building accessible, inclusive products and digital
					experiences for a variety of clients. <br />{" "}
					I also recently completely a course that covers everything you
					need to build a web app with the Restful API using Node &
					React. <br />
					Here are a few technologies I’ve been working with recently:
				</p>

				<div className="grid grid-cols-2 mt-5">
					<div className="flex gap-2  items-center">
						<FaArrowRight />
						JavaScript (ES6+)
					</div>
					<div className="flex gap-2 items-center">
						<FaArrowRight />
						React
					</div>
					<div className="flex gap-2 items-center">
						<FaArrowRight />
						TailwindCSS
					</div>
					<div className="flex gap-2 items-center">
						<FaArrowRight />
						Next.js
					</div>
					<div className="flex gap-2 items-center">
						<FaArrowRight />
						Node.js
					</div>
					<div className="flex gap-2 items-center">
						<FaArrowRight />
						Express.js
					</div>
				</div>
			</div>
			<div>
				<img
					src="https://i.ibb.co/TcjhCFQ/394865229-166709613170184-4566337752726610918-n-1-removebg.png"
					alt=""
					className="rounded-full"
				/>
			</div>
		</div>
	);
};

export default About;
