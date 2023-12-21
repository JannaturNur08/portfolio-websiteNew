import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { AnchorProvider } from "react-anchor-navigation";

const blob = document.getElementById("blob");
document.body.onpointermove = (e) => {
	const { clientX, clientY } = e;
	blob.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className=" mx-auto">
			<AnchorProvider>
				<RouterProvider router={router} />
			</AnchorProvider>
		</div>
	</React.StrictMode>
);
