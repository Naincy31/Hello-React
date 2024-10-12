import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { CDN_URL, LOGO_URL } from "./utils/constants";


const AppLayout = () => {
    return (
        <div className="app">
            <Header logo = {LOGO_URL}/>
            <Body cdn = {CDN_URL}/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)