import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Main = () => {
	return (
		<div className="min-h-screen mx-auto m-0 flex flex-col text-textColor ">
			<div>
				<Navbar></Navbar>
			</div>
			
			<div>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Main;
