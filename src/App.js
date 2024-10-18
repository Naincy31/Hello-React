import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import RestoMenu from "./components/RestoMenu";
import RestoList from "./components/RestoList";

const AppLayout = () => {
    return (
        <div className="font-noto">
            <Header logo = {LOGO_URL}/>
            <Outlet/> 
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <RestoList/>
            },
            {
                path: "/about", 
                element: <About/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestoMenu/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)