import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlog from "../pages/AllBlog/AllBlog";
import FeaturedBlog from "../pages/Featured/FeaturedBlog";
import Wishlist from "../pages/Wishlist/Wishlist";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addBlog',
                element:<AddBlog></AddBlog>
            },
            {
                path:'/allBlog',
                element:<AllBlog></AllBlog>
            },
            {
                path:'/featured',
                element:<FeaturedBlog></FeaturedBlog>
            },
            {
                path:'/wishlist',
                element:<Wishlist></Wishlist>
            },
            {
                path:'/blogDetails',
                element:<BlogDetails></BlogDetails>
            },
            {
                path:'/updateBlog',
                element:<UpdateBlog></UpdateBlog>
            }
        ]
    }
])