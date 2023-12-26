

const Education = () => {
    return (
        <div className="pt-80 h-[500px] mb-10">
			<h2 className="text-5xl font-openSans font-bold">
				Where I've Studied
			</h2>
			<div className="flex gap-10 mt-5 items-center">
				<div className="flex gap-5 items-center">
					<div className="border-primary text-primary h-10 border-2"></div>
					<p>Premier University</p>
				</div>
				<div >
					<h4>
						
						<span className="text-primary">
							<a href="https://puc.ac.bd/">Premier University</a>
						</span>
					</h4>
					<small className="">July 2015 - July 2019</small>

					<p className="mt-2 ">
						Bachelor of Science in Computer Science and Engineering
					</p>
				</div>
			</div>
		</div>
    );
};

export default Education;