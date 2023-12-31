import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";


import {
	
	AnchorProvider,
	
  } from "react-anchor-navigation";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <AnchorProvider>
					<Home></Home>
				</AnchorProvider>,
			},

			
		
		],
	},
]);