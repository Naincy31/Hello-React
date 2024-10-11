import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestoCard = () => {
    return (
        <div className="resto-card">
            <img src="https://www.hotelierindia.com/cloud/2023/03/02/9I3A1841-HDR-1-1024x682.jpg" className="res-img"/>
            <div className="resto-content">
                <h4>Amazonia</h4>
                <span>Asian, Chinese, Japanese, Italian</span>
                <p>4 stars</p>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="resto-container">
                <RestoCard/>
                <RestoCard/>
                <RestoCard/>
                <RestoCard/>
                <RestoCard/>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)