import { useState } from "react"; 
import { Link, NavLink } from "react-router-dom";

const Header = ({logo}) => {

    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Cart</li>
                </ul>
                <button onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }} className="login">{btnName}</button>
            </div>
        </div>
    )
}

export default Header;