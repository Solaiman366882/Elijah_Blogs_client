import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/custom.css";
import "./assets/css/responsive.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster position="top-right" reverseOrder={true} />
			<AuthProvider>
				<RouterProvider router={router}></RouterProvider>
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
