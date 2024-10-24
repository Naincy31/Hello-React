import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import RestoMenu from "./components/RestoMenu";
import RestoList from "./components/RestoList";
import { Provider } from "react-redux";
import appStore from "../src/utils/store/appStore";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Login from "./components/Login";

const AppLayout = () => {
    const [userName, setUserName] = useState()

    useEffect(() => {
        const data = {
            name: "Naincy Rathore"
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store={appStore}>
            <div className="font-noto bg-gray-50 h-screen">
                <Header logo = {LOGO_URL}/>
                <Outlet/> 
                <Footer/>
            </div>
        </Provider>
        
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
                path:"/search",
                element: <Search/>
            },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path:"/login",
                element: <Login/>
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