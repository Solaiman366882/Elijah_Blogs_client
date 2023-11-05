import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/custom.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router}></RouterProvider>
		</AuthProvider>
	</React.StrictMode>
);
