import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { AnchorProvider } from "react-anchor-navigation";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className=" mx-auto">
    <AnchorProvider>
	<RouterProvider router={router} />
	</AnchorProvider>
    </div>
	</React.StrictMode>
);
